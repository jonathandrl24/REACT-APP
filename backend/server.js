const express = require('express');
const app = express();
const cors = require("cors");

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

// Permitir solicitudes desde el frontend
app.use(cors({
  origin: "http://localhost:3000", // Permitir solicitudes desde el frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  credentials: true, // Permitir el envío de cookies y headers autorizados
}));

app.use(express.json());
app.use('/api', require('./routes')); // Asegúrate de que tus rutas estén aquí

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Acceso no autorizado" });

  try {
    const decoded = jwt.verify(token, "SECRETO_DEL_TOKEN");
    req.user = decoded; // Guardar datos del usuario en la solicitud
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido" });
  }
};

app.get("/api/protected-route", verifyToken, (req, res) => {
  res.status(200).json({ message: "Ruta protegida alcanzada con éxito" });
});

app.options('*', cors());