import React, { createContext } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';

const ISSContext = createContext();

function App() {
  const contextValue = {
    error: null,
    isFetching: false,
    latitude: -19.9410656,
    longitude: -43.9333033,
  };

  return (
    <ISSContext.Provider value={contextValue}>
      <div className="App">
        <h1>International Space Station Location Tracker</h1>
        <ISSLocation />
      </div>
    </ISSContext.Provider>
  );
}

export default App;
