const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/vehicles',
  method: 'GET'
};

console.log("🚀 Lancement du test de charge automatique...");

for (let i = 0; i < 100; i++) {
  const req = http.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log(`Requête ${i+1}: Succès (200 OK)`);
    } else {
      console.log(`Requête ${i+1}: ÉCHEC (${res.statusCode})`);
    }
  });
  req.on('error', (e) => console.error(`Erreur: ${e.message}`));
  req.end();
}