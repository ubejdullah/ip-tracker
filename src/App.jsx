import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';

async function fetchIpInfo(ip = '') {
  const response = await fetch(`https://ipinfo.io/${ip}?token=YOUR-API-KEY`);
  const data = await response.json();
  return data;
}

function App() {
  const [ipInfo, setIpInfo] = useState(null);
  const [ip, setIp] = useState('');

  useEffect(() => {
    fetchIpInfo().then((data) => setIpInfo(data));
  }, []);

  const handleSearch = () => {
    fetchIpInfo(ip).then((data) => setIpInfo(data));
  };

  return (
    <>
      <div className="header">
        <div className="search-bar-container">
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="IP-Adresse eingeben"
            className="search-bar"
          />
          <button onClick={handleSearch} className="search-button">Suche</button>
        </div>
        <div className="ip-info-container">
          {ipInfo ? (
            <>
              <div className="ip-info-card">
                <p>IP-Adresse</p>
                <p>{ipInfo.ip}</p>
              </div>
              <div className="ip-info-card">
                <p>Land</p>
                <p>{ipInfo.country}</p>
              </div>
              <div className="ip-info-card">
                <p>Region</p>
                <p>{ipInfo.region}</p>
              </div>
              <div className="ip-info-card">
                <p>Stadt</p>
                <p>{ipInfo.city}</p>
              </div>
              <div className="ip-info-card">
                <p>Postleitzahl</p>
                <p>{ipInfo.postal}</p>
              </div>
              <div className="ip-info-card">
                <p>Organisation</p>
                <p>{ipInfo.org}</p>
              </div>
            </>
          ) : (
            <h1>Lade IP-Informationen...</h1>
          )}
        </div>
      </div>
      <div className="map-container">
        {ipInfo && ipInfo.loc && <MapComponent width={ipInfo.loc.split(',')[0]} length={ipInfo.loc.split(',')[1]} />}
      </div>
    </>
  );
}

export default App;
