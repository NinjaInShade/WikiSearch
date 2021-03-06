import React from "react";

import "./Result.css";

export default function Result({ result }) {
  console.log(result);

  return (
    <article className="result">
      <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noreferrer" className="result-title">
        {result.title}
      </a>
      <div className="bottom-container">
        <img alt="Result thumbnail" src={result.thumbnail.source} />
        <p className="result-description">{result.extract}</p>
      </div>
    </article>
  );
}
