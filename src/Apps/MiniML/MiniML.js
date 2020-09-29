import React, { useState } from 'react';
import './MiniML.css';

const MiniML = () => {
  const [textSearch, setTextSearch] = useState(null);
  const fetchData = params => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${encodeURIComponent(params)}`).then(response => response.json()).then(console.log);
  }

  return (
    <div className='mttContainer'>
      <div className='headerMTT'>
        <div className='headerSearch'>
          <input onClick={e => console.log('el event', e)} type="text" placeholder='Buscar productos, marcas y más…'></input> <button onClick={() => fetchData('banana')}>SEARCH</button></div>
      </div>
      <div className='mttViewer'>
        <p>whatever</p>
      </div>
    </div>
  )
}

export default MiniML;