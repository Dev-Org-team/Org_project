// controllers/userController.js
const db = require('../config/db.js');

// Exemple de fonction pour récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT id, email, name FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs." });
  }
};

// Exemple de fonction pour créer un utilisateur
exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email',
      [name, email]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur." });
  }
};