import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const mapStyles = {
  width: "100%",
  height: "100%",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   margin: "auto",
};

const coords = {
  lat: -3.745,
  lng: -38.523,
};

const MapContainer = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    //This is just an example of getting and using the map instance!!

    const bounds = new window.google.maps.LatLngBounds(coords);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      center={coords}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <></>
  );
};
export default MapContainer;