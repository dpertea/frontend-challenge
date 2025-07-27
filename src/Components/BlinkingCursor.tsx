import { useState, useEffect } from "react";

type CursorProps = {
  blink: boolean;
  speed: number; //passed in ms
};

const BlinkingCursor: React.FC<CursorProps> = ({ blink, speed }) => {
  const [opacity, setOpacity] = useState(true);

  useEffect(() => {
    //toggle
    if (blink) {
      const intervalId = setInterval(() => {
        setOpacity((opacity) => !opacity);
      }, speed);
      return () => clearInterval(intervalId); // interval cleanup
    }
  }, [blink]);

  return (
    <span style={{ opacity: opacity ? 1 : 0 }} className="cursor">
      |
    </span>
  );
};

export default BlinkingCursor;
