const express = require('express');
const app = express();
const PORT = 8000;

app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenue sur le serveur F_Brain 🚀' });
});

app.listen(PORT, () => {
  console.log(`Serveur backend en écoute sur le port ${PORT}`);
});
