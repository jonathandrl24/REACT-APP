const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Aquí está el puerto del backend

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});