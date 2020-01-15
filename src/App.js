import React, { createContext } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';

const ISSContext = createContext();

function App() {
  return (
    <div className="App">
      <h1>International Space Station Location Tracker</h1>
      <ISSLocation />
    </div>
  );
}

export default App;
