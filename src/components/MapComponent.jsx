import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import mapStyle from '../styles/mapStyle.json';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

function MapComponent({ width, length }) {
  const center = {
    lat: parseFloat(width),
    lng: parseFloat(length)
  };

  const options = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBwNy3KE4jwgRHGwqJgjkhx1bSyPsWp_es">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);
