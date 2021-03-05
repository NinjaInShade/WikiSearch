import React, { useState, useEffect } from "react";
import { placeholders, getRandomInt } from "../../util/placeholders";

import "./SearchBar.css";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    setPlaceholder(`Try ${placeholders[getRandomInt(placeholders.length)]}...`);
  }, []);

  function search(e) {
    e.preventDefault();
  }

  return (
    <div className="searchbar-container">
      <input type="text" className="searchbar" value={input} onChange={(e) => setInput(e.target.value)} placeholder={placeholder} />
      <button className="search" onClick={(e) => search(e)}>
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}
