import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Result from "./components/Result/Result";

import "./App.css";
import "./main.css";

function App() {
  const [results, setResults] = useState(undefined);
  const [loading, setLoading] = useState(false);

  return (
    <main className="page-layout">
      <div className="content-container">
        <header>
          <h1>
            <span className="blue">S</span>
            <span className="red">e</span>
            <span className="yellow">a</span>
            <span className="blue">r</span>
            <span className="green">c</span>
            <span className="red">h</span>
            <span className="blue">M</span>
            <span className="yellow">e</span>
            <span className="red exclamation">!</span>
          </h1>
        </header>
        <SearchBar setResults={setResults} setLoading={setLoading} />

        {results && <p className="result-number">Displaying {results.length} results.</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="results">
            {results &&
              results.map((result, index) => {
                return (
                  <li key={index}>
                    <Result result={result} />
                  </li>
                );
              })}
          </ul>
        )}
      </div>
      <p className="footer">
        &lt;&lt; Powered by{" "}
        <a href="https://en.wikipedia.org/wiki/Main_Page" rel="noreferrer" target="_blank" className="wikipedia">
          wikipedia
        </a>{" "}
        &gt;&gt;
      </p>
    </main>
  );
}

export default App;
