import { useState, useEffect } from "react";
import "./App.css";
import FlagRenderer from "./Components/FlagRenderer";

function App() {
  return (
    <>
      <div className="card">
        <h1>The flag has been captured: </h1>
        <FlagRenderer
          url="https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/706174"
          speed={500}
        />
      </div>
      <p className="name">
        Frontend Ramp Capture the Flag Challenge | Doria Pertea
      </p>
    </>
  );
}

/******* [BONUS:]The script I wrote to get the url is in the comment below:


//i downloaded the html and then added the following js as a script to run whenever i opened the html in the browser
window.addEventListener("DOMContentLoaded", getURL);


function getURL() {
    const validSections = [...document.querySelectorAll("section")].filter(section => section.getAttribute('data-id') && section.getAttribute('data-id').slice(0,2) === '92');
    const validArticles = getValidTags(validSections, 'article', a => {
        const dataClass = a.getAttribute("data-class");
        return dataClass && dataClass.slice(-2) === "45"
    })

    const validDivs =  getValidTags(validArticles, 'div', d => {
        const dataTag = d.getAttribute('data-tag');
        return dataTag && dataTag.includes('78')
    })

    const validBs =  getValidTags(validDivs, 'b', b => {
        return b && [...b.classList].filter(c => c === 'ref').length >= 1;
    })


    let url = '';
    for (const b of validBs) {
        const val = b.getAttribute('value');
        if (val) url += val;
    }

    console.log("URL IS:", url)
    //also going to add the url to the screen because why not
    const h2 = document.createElement("h2");
    h2.textContent = url;

    document.body.appendChild(h2);
    //got url: https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/706174 
    // word = patient

}


function getValidTags(parents, tagName, condition) {
    let results = [];
    for (const parent of parents) {
      const valid = [...parent.querySelectorAll(tagName)].filter(condition);
      results = results.concat(valid);
    }
    return results;
  }
*/

export default App;
