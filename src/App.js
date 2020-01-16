import React, { Component } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import ISSContext from './context/ISSContext';
import { getCurrentISSLocation } from './services/issAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      latitude: null,
      longitude: null,
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleISSLocationSuccess = this.handleISSLocationSuccess.bind(this);
    this.handleISSLocationFailure = this.handleISSLocationFailure.bind(this);
  }

  fetchISSLocation() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    getCurrentISSLocation()
      .then(this.handleISSLocationSuccess, this.handleISSLocationFailure);
  }

  handleISSLocationSuccess(response) {
    const { iss_position: { latitude, longitude } } = response;

    this.setState({
      isFetching: false,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    });
  }

  handleISSLocationFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      getCurrentISSLocation: this.fetchISSLocation,
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
