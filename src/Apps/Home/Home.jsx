import React from 'react';


import logo from '../../logo.svg';
import '../../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there! I'm Matías but you can call me
        </p>
        <h1>MATT</h1>
        <p>that's my nickname</p>
      </header>
    </div>
  );
}

export default Home;