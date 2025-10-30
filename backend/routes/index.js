// routes/index.js
const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Montage des routes spécifiques
router.use('/users', userRoutes); 

module.exports = router