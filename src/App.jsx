import React, { useState, useEffect } from 'react';

async function fetchIpInfo() {
  const response = await fetch('https://ipinfo.io/?token=1ef03f73d5883c');
  const data = await response.json();
  return data;
}

function GoogleMap({ width, length }) {
  const ApiKey = "AIzaSyBwNy3KE4jwgRHGwqJgjkhx1bSyPsWp_es";
  const src = `https://www.google.com/maps/embed/v1/view?key=${ApiKey}&center=${width},${length}&zoom=15`;

  return (
    <iframe src={src} allowFullScreen="" loading="lazy"></iframe>
  );
}

function App() {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    fetchIpInfo().then((data) => setIpInfo(data));
  }, []);

  return (
    <>
      {ipInfo && <GoogleMap width={ipInfo.loc.split(',')[0]} length={ipInfo.loc.split(',')[1]} />}
      <div className="ip-info-container">
        {ipInfo ? (
          <>
            <div className="ip-info-card">
              <p>IP Address: {ipInfo.ip}</p>
            </div>
            <div className="ip-info-card">
              <p>City: {ipInfo.city}</p>
            </div>
            <div className="ip-info-card">
              <p>Region: {ipInfo.region}</p>
            </div>
            <div className="ip-info-card">
              <p>Country: {ipInfo.country}</p>
            </div>
          </>
        ) : (
          <h1>Loading IP information...</h1>
        )}
      </div>
    </>
  );
}

export default App;
