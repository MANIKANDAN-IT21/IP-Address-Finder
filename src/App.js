// App.js

import React, { useEffect, useState } from "react";
import Axios from "axios";
import Map from "./components/Map";
import "./App.css";

// Import your GIF file
import loadingGif from "../src/Assets/giphy.gif";

function App() {
  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);

  useEffect(() => {
    Axios.get("https://ipapi.co/json/").then((res) => {
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
    });
  }, []);

  return (
    <>
      <h1 className="heading">IP Address Finder</h1>
      <hr className="hr"></hr>
      <div className="App">
        <div className="left">
          <h4 className="Quest">What is my IPv4 address?</h4>
          <h1 id="ip">{ipDetails.ip}</h1>
          <h4 className="Quest">Approximate location:</h4>
          <p>
            {ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}.
          </p>
          <h4 className="Quest">Internet Service Provider(ISP):</h4>
          <p>{ipDetails.org}</p>
        </div>
        {/* Replace 'path-to-your-gif' with the actual path to your GIF */}
        <img src={loadingGif} alt="Loading GIF" className="loading-gif" />
        <Map lat={lat} lon={lon} />
      </div>
    </>
  );
}

export default App;
