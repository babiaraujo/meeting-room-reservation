let reservations = [];
let rooms = ['Room A', 'Room B', 'Room C'];

exports.createReservation = (req, res) => {
  const { room, date, time } = req.body;
  const reservation = { id: reservations.length + 1, room, date, time, userId: req.user.id };
  reservations.push(reservation);
  res.status(201).json(reservation);
};

exports.getReservations = (req, res) => {
  const userReservations = reservations.filter(r => r.userId === req.user.id);
  res.json(userReservations);
};
