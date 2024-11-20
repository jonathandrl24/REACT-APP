const express = require('express');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Middleware para datos codificados en URL (si usas `x-www-form-urlencoded`)
app.use(express.urlencoded({ extended: true }));

// Rutas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Escuchar servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
