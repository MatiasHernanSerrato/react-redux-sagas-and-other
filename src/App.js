import React from 'react';

import SumAndSubtraction from './Apps/SumAndSubstraction';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bueno ahora lo cambio a M4TT
        </p>
        <SumAndSubtraction />
      </header>
    </div>
  );
}

export default App;
