const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

require("dotenv").config();

// Controlador para registrar usuarios
router.post('/register', registerUser);

// Controlador para el inicio de sesión
router.post('/login', loginUser);

module.exports = router;