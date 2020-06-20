import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ISSContext from './ISSContext';
import { getCurrentISSLocation, getPeopleInSpace } from '../services/issAPI';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      latitude: null,
      longitude: null,
      showMap: true,
      peopleInSpace: undefined,
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleISSLocationSuccess = this.handleISSLocationSuccess.bind(this);
    this.handleISSLocationFailure = this.handleISSLocationFailure.bind(this);
    this.handleToggleMap = this.handleToggleMap.bind(this);
    this.fetchNumberOfPeopleInSpace = this.fetchNumberOfPeopleInSpace.bind(this);
    this.handlePepoleInSpaceSuccess = this.handlePepoleInSpaceSuccess.bind(this);
  }

  fetchISSLocation() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    getCurrentISSLocation()
      .then(this.handleISSLocationSuccess, this.handleISSLocationFailure);
  }

  fetchNumberOfPeopleInSpace() {
    getPeopleInSpace().then(this.handlePepoleInSpaceSuccess);
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

  handlePepoleInSpaceSuccess(response) {
    this.setState({ peopleInSpace: response.people });
  }

  handleToggleMap() {
    this.setState(({ showMap }) => ({ showMap: !showMap }));
  }

  render() {
    const contextValue = {
      ...this.state,
      getCurrentISSLocation: this.fetchISSLocation,
      toggleMap: this.handleToggleMap,
      getPeopleInSpace: this.fetchNumberOfPeopleInSpace,
    };
    const { children } = this.props;

    return (
      <ISSContext.Provider value={contextValue}>
        {children}
      </ISSContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
