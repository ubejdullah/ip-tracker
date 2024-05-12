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
    <iframe src={src} width="600" height="450" style={{ border: 0, backgroundColor: 'black'}} allowFullScreen="" loading="lazy"></iframe>
  );
}

function App() {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    fetchIpInfo().then((data) => setIpInfo(data));
  }, []);

  return (
    <>
      <div className="card">
        {}
        {ipInfo ? (
          <>
            <h1>IP Address: {ipInfo.ip}</h1>
            <p>Hostname: {ipInfo.hostname}</p>
            <p>City: {ipInfo.city}</p>
            <p>Region: {ipInfo.region}</p>
            <p>Country: {ipInfo.country}</p>
            <p>Geographical Coordinates: {ipInfo.loc}</p>
            <p>Organization: {ipInfo.org}</p>
            <p>Postal Code: {ipInfo.postal}</p>
            <p>Timezone: {ipInfo.timezone}</p>
          </>
        ) : (
          <p>Loading IP information...</p>
        )}
      </div>
      <div>
        {}
        {ipInfo && <GoogleMap width={ipInfo.loc.split(',')[0]} length={ipInfo.loc.split(',')[1]} />}
      </div>
    </>
  );
}

export default App;
