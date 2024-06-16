const express = require('express');
const authRoutes = require('./routes/authRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
const PORT = 4000;

// Middleware para parsear JSON
app.use(express.json());

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Rotas de reservas
app.use('/api', reservationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
