const express = require('express');
const config = require('./config');
const db = require('./config/db.js'); 
const apiRoutes = require('./routes'); 

const app = express();
const PORT = config.port;

app.use(express.json());


db.connect();

app.use('/api', apiRoutes);

// Route de base (Santé du serveur)
app.get('/', (req, res) => {
  res.send('Server is running and healthy!');
});

// 3. Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🔖 Server running on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
});