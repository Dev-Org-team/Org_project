// routes/userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControlleur');

// Route GET /api/users
router.get('/', userController.getAllUsers);

// Route POST /api/users
router.post('/', userController.createUser);

module.exports = router;