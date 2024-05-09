import React, { useState, useEffect } from 'react';
import './App.css';

async function fetchIp() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

function App() {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    fetchIp().then((ip) => setIp(ip));
  }, []); // Leerer Array als Abhängigkeit, um sicherzustellen, dass die useEffect-Funktion nur einmal ausgeführt wird

  return (
    <>
      <div className="card">
        <h1>
          IP-Adresse: {ip}
        </h1>
      </div>
    </>
  );
}

export default App;
