import { useState, useEffect } from "react";
import BlinkingCursor from "./BlinkingCursor";

type FlagProps = {
  url: string;
  speed: number; //passed in ms
};
const FlagRenderer: React.FC<FlagProps> = ({ url, speed }) => {
  const [flag, setFlag] = useState<string | null>(null);
  const [listElements, setListElements] = useState<string[]>([]);
  useEffect(() => {
    //fetch flag word
    fetch(url)
      .then((res) => res.text())
      .then((text) => setFlag(text))
      .catch((err) => console.error("Fetch error:", err));
  }, [url]);

  useEffect(() => {
    if (flag) {
      const interval = setInterval(() => {
        setListElements((prev) => {
          const nextChar = flag[prev.length];
          if (nextChar === undefined) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, nextChar];
        });
      }, speed);

      return () => clearInterval(interval);
    }
  }, [flag]);
  return (
    <div id="flag-container" aria-busy={flag === null}>
      {flag === null ? (
        <span
          className="loader"
          aria-label="Loading content"
          role="status"
          aria-live="polite"
        >
          Loading...
        </span>
      ) : (
        <>
          <ul
            className="inline-list"
            aria-label={`Displaying the word ${flag} with a typewriter effect.`}
            role="text"
          >
            {listElements.map((li, i) => (
              <li key={`${li}-${i}`} aria-hidden="true" className="fade-in">
                {li}
              </li>
            ))}
          </ul>
          <BlinkingCursor
            blink={listElements.length === flag?.length ? true : false}
            speed={speed}
          />
        </>
      )}
    </div>
  );
};

export default FlagRenderer;
