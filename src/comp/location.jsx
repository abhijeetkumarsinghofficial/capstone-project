import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  

const center = {
  lat: 31.252232,
  lng: 75.703115
};
const Location = ()=>{
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyClRuzWV_6fTDPWKIYraBvauyOE_eYvrRc"  //need to define your google api key 
  })

const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
//load marker after 2.2 seconds
const [showMarker, setShowMarker] = React.useState(false);
React.useEffect(() => {
  setTimeout(() => {
    setShowMarker(true);
  }, 2200);
}, []);
  return <div style={{position:'relative'}}>
    <div style={{position:'absolute',top:10,left:20 ,backgroundColor:'grey',padding:25,zIndex:999}}>
      <h1>Our Location</h1>
    </div>
    {isLoaded ? <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={7}
    onLoad={onLoad}
    onUnmount={onUnmount} 
  > 

  {/* <Marker position={center} /> */}
  {map && showMarker && <Marker position={center} />}
    { /* Child components, such as markers, info windows, etc. */ }
    <></>
  </GoogleMap>
  :<></>
    }

  </div>

  
}

export default Location;