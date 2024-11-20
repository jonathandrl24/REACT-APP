const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const { registerUser } = require('../controllers/authController');

require("dotenv").config();

// Controlador para registrar usuarios
router.post('/register', registerUser);

// Inicio de sesión
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por email
    const users = await User.findOne({ where: { email } });
    if (!users) return res.status(404).json({ message: "Usuario no encontrado" });

    // Verificar contraseña
    const isMatch = await bcrypt.compare(password, users.password);
    if (!isMatch) return res.status(401).json({ message: "Credenciales incorrectas" });

    // Generar token
    const token = jwt.sign({ id: users.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión", error });
  }
});

module.exports = router;
