import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";
import "./main.css";

function App() {
  return (
    <main className="page-layout">
      <div>
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
        <SearchBar />
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
