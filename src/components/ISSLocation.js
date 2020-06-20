import React, { useContext, useEffect } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import ISSContext from '../context/ISSContext';
import useTimer from '../effects/useTimer';

function ISSLocation() {
  const {
    error,
    isFetching,
    latitude,
    longitude,
    getCurrentISSLocation,
  } = useContext(ISSContext);
  const isLocationPresent = latitude && longitude;

  useTimer(getCurrentISSLocation, 2000);

  useEffect(() => {
    const now = new Date();
    document.title = now.toLocaleTimeString();
  });

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
