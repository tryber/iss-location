import React, { useContext } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ToggleMap from './components/ToggleMap';
import ISSContext from './context/ISSContext';
import PeopleInSpace from './components/PeopleInSpace';

function App() {
  const { showMap } = useContext(ISSContext);

  return (
    <div className="App">
      <h1>International Space Station Location Tracker</h1>
      <ToggleMap />
      {showMap && <ISSLocation />}
      <PeopleInSpace />
    </div>
  );
}

export default App;
