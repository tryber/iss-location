import React, { useContext, useEffect } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import ISSContext from '../context/ISSContext';

function ISSLocation() {
  // componentDidMount() {
  //   const { getCurrentISSLocation } = this.context;

  //   this.timer = setInterval(
  //     getCurrentISSLocation,
  //     2000,
  //   );

  //   const now = new Date();
  //   document.title = now.toLocaleTimeString();
  // }

  // componentDidUpdate() {
  //   const now = new Date();
  //   document.title = now.toLocaleTimeString();
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  const {
    error,
    isFetching,
    latitude,
    longitude,
    getCurrentISSLocation,
  } = useContext(ISSContext);
  const isLocationPresent = latitude && longitude;

  useEffect(() => {
    setInterval(
      getCurrentISSLocation,
      2000,
    );
  }, []);

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

export default ISSLocation;
