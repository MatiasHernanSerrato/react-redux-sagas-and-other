import React, { useState } from "react";
import "./MiniML.css";

const MiniML = () => {
  const [textSearch, setTextSearch] = useState(null);
  const [results, setResults] = useState([]);
  const fetchData = (params) => {
    // fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${encodeURIComponent(params)}`).then(response => response.json()).then(v => setResults(v.results));
    fetch(
      `http://localhost:3030/api/items?query=:${encodeURIComponent(params)}`
    )
      .then((response) => response.json())
      .then((v) => setResults(v.items));
  };

  console.log(results);
  const setValueforSearch = (text) => setTextSearch(text);

  return (
    <div className="mttContainer">
      <div className="headerMTT">
        <div className="headerSearch">
          <input
            onChange={(event) => setValueforSearch(event.target.value)}
            type="text"
            placeholder="Buscar productos, marcas y más…"
          ></input>{" "}
          <button onClick={() => fetchData(textSearch)}>SEARCH</button>
        </div>
      </div>
      <div className="mttViewer">
        <ol>
          {results.map((result) => (
            <li key={result.id}>
              <a
                target="_blank"
                href={`http://localhost:3030/api/items/${result.id}`}
              >
                {result.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MiniML;
