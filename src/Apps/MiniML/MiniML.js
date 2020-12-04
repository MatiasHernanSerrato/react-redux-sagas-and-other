import React, { useState } from "react";
import { ItemSearch } from "./ItemSearch/ItemSearch";
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

  const setValueforSearch = (text) => setTextSearch(text);

  const onSearchKeyPress = async (event) => {
    if (event.key === "Enter") {
      await fetchData(textSearch);
    }
  };

  return (
    <div className="mttContainer">
      <div className="headerMTT">
        <div className="headerSearch">
          <input
            onChange={(event) => setValueforSearch(event.target.value)}
            type="text"
            placeholder="Buscar productos, marcas y más…"
            onKeyPress={onSearchKeyPress}
          />
          <button onClick={() => fetchData(textSearch)}>SEARCH</button>
        </div>
      </div>
      <div className="mttViewer">
        <div className="ScrollableContent">
          {results && !!results.length && (
            <ul className="ListContainerItems">
              {results.map((result) => (
                <li key={result.id}>
                  <ItemSearch
                    title={result.title}
                    image={result.picture}
                    price={result.price}
                    freeShipping={result.free_shipping}
                    onClick={() =>
                      (window.location = `http://localhost:3030/api/items/${result.id}`)
                    }
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniML;
