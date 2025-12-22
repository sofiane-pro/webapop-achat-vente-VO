const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const vehiclesPath = path.join(__dirname, 'vehicles.json');

// GET /api/vehicles
app.get('/api/vehicles', (req, res) => {
  fs.readFile(vehiclesPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    try {
      const vehicles = JSON.parse(data);
      res.json(vehicles);
    } catch (parseErr) {
      res.status(500).json({ error: 'Erreur de parsing des données' });
    }
  });
});

// POST /api/login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Simulation d'authentification simple
  if (username === 'admin' && password === 'password') {
    res.json({ success: true, message: 'Connexion réussie' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur backend en cours sur http://localhost:${PORT}`);
});