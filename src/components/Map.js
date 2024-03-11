// Map.js

import  { useEffect, useState } from "react";
// import ReactMapGL, { Marker } from "react-map-gl";
// import { RiUserLocationFill } from "react-icons/ri";

const API_KEY =
  "pk.eyJ1IjoibWFuaWthbWFyYWoyMDAzIiwiYSI6ImNsdG11aGZxMTBtaDEycW9tOXh1N2dqNjYifQ.AxXYMBK2V985MdbZewkKRA";

  const Map = ({ lat, lon }) => {
	const [viewport, setViewport] = useState({
	  latitude: lat,
	  longitude: lon,
	  zoom: 14,
	  bearing: 0,
	  pitch: 0,
	  width: "100%",
	  height: "100%",
	});
  
	useEffect(() => {
	  const updatedViewport = { ...viewport };
	  updatedViewport.latitude = lat;
	  updatedViewport.longitude = lon;
	  setViewport(updatedViewport);
	}, [lat, lon, viewport]); // Include 'viewport' in the dependency array
  
	// ... rest of the component
  };

  export default Map