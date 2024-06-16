const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createReservation, getReservations } = require('../controllers/reservationController');

const router = express.Router();

router.post('/reservations', authMiddleware, createReservation);
router.get('/reservations', authMiddleware, getReservations);

module.exports = router;
