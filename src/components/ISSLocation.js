import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import ISSContext from '../context/ISSContext';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.context;

    this.timer = setInterval(
      getCurrentISSLocation,
      2000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      error,
      isFetching,
      latitude,
      longitude,
    } = this.context;
    const isLocationPresent = latitude && longitude;

    return (
      <div>
        <div className="map">
          <Map
            center={[0, 0]}
            defaultWidth={700}
            height={450}
            minZoom={1}
            maxZoom={20}
            zoom={1}
          >
            {!isFetching && isLocationPresent && <Marker anchor={[latitude, longitude]} />}
          </Map>
        </div>
        {isFetching && 'Loading...'}
        {!isFetching && isLocationPresent && `Current ISS location: latitude = ${latitude}, longitude = ${longitude}`}
        {!isFetching && error}
      </div>
    );
  }
}

ISSLocation.contextType = ISSContext;

export default ISSLocation;
