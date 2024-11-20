const bcrypt = require('bcrypt');
const User = require('../models/User'); // Cambia la ruta según tu proyecto
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verifica si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya está registrado.' });
    }

    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword, // Aquí se encripta la contraseña antes de guardarla
    });

    res.status(201).json({
      message: 'Usuario registrado correctamente.',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error al registrar usuario.' });
  }
};

// Controlador para iniciar sesión
const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Buscar al usuario por email
      const user = await User.findOne({ where: { email } });
  
      // Verificar si el usuario existe
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Comparar la contraseña ingresada con la almacenada
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
  
      // Generar un token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        'secret_key', // Cambia esto por una clave secreta más segura
        { expiresIn: '1h' }
      );
  
      // Enviar el token y los datos del usuario como respuesta
      res.status(200).json({
        message: 'Inicio de sesión exitoso',
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  module.exports = {
    registerUser,
    loginUser,
  };