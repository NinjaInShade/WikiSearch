import React, { useState, useEffect } from "react";
import { placeholders, getRandomInt } from "../../util/placeholders";

import "./SearchBar.css";

export default function SearchBar({ setResults, setLoading }) {
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const wiki_api = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${input.trim()}&gsrlimit=20&prop=pageimages|extracts&exchars=200&exintro&explaintext&exlimit=max&format=json&origin=*`;

  useEffect(() => {
    setPlaceholder(`Try ${placeholders[getRandomInt(placeholders.length)]}...`);
  }, []);

  function search(e) {
    e.preventDefault();
    const results = [];

    if (input.length < 1) {
      return;
    }

    setLoading(true);

    // Grab results from wiki API
    fetch(wiki_api, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        if (data.hasOwnProperty("query")) {
          // eslint-disable-next-line
          for (const [key, value] of Object.entries(data.query.pages)) {
            if (value.hasOwnProperty("thumbnail")) {
              results.push(value);
            }
          }
        }

        setResults(results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  return (
    <form className="searchbar-container">
      <input type="text" className="searchbar" value={input} onChange={(e) => setInput(e.target.value)} placeholder={placeholder} />
      <button className="search" onClick={(e) => search(e)} type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}
