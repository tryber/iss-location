import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import ISSContext from '../context/ISSContext';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    this.timer = setInterval(
      getCurrentISSLocation,
      2000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <ISSContext.Consumer>
        {({
          error,
          isFetching,
          latitude,
          longitude,
        }) => {
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
        }}
      </ISSContext.Consumer>
    );
  }
}

export default ISSLocation;
