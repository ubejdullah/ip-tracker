fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip; // IP-Adresse des Nutzers
        console.log(`Deine IP-Adresse ist: ${ip}`);
    });
