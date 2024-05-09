import React, { useState, useEffect } from 'react';
import './App.css';

async function fetchIpInfo() {
  const response = await fetch('https://ipinfo.io/?token=1ef03f73d5883c');
  const data = await response.json();
  return data;
}

function App() {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    fetchIpInfo().then((data) => setIpInfo(data));
  }, []);

  return (
    <>
      <div className="card">
        {ipInfo ? (
          <>
            <h1>IP-Adresse: {ipInfo.ip}</h1>
            <p>Hostname: {ipInfo.hostname}</p>
            <p>Stadt: {ipInfo.city}</p>
            <p>Region: {ipInfo.region}</p>
            <p>Land: {ipInfo.country}</p>
            <p>Geographische Koordinaten: {ipInfo.loc}</p>
            <p>Organisation: {ipInfo.org}</p>
            <p>Postleitzahl: {ipInfo.postal}</p>
            <p>Zeitzone: {ipInfo.timezone}</p>
          </>
        ) : (
          <p>Lade IP-Informationen...</p>
        )}
      </div>
    </>
  );
}

export default App;
