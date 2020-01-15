import React, { Component } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSContext from './context/ISSContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      latitude: -19.9410656,
      longitude: -43.9333033,
    };
  }

  render() {
    const contextValue = {
      ...this.state,
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
}

export default App;
