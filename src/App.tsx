import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello novices! This division (whose class is "App") is defined in <code>src/App.tsx</code>.
        </p>
        <p>
          This is rendered in <code>src/index.tsx</code>.
        </p>
        <p>
          Edit it and reload the web page!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
