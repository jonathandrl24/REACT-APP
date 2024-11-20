const bcrypt = require('bcrypt');
const User = require('../models/User'); // Cambia la ruta según tu proyecto

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

module.exports = { registerUser };
