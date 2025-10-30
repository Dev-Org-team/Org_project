// config/ds.js
const { Pool } = require('pg');
const config = require('./index');


const pool = new Pool(config.db);

// Fonction pour effectuer des requêtes (optionnel, pour simplifier l'utilisation)
const query = (text, params) => pool.query(text, params);

module.exports = {
  pool,
  query,
  connect: async () => {
    try {
      await pool.query('SELECT NOW()');
      console.log('✅ Connecté à la base de données PostgreSQL');
    } catch (err) {
      console.error('❌ Erreur de connexion à PostgreSQL :', err.message);

      process.exit(1);
    }
  },
};