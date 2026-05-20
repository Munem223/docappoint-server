const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { 
  getMyBookings, 
  bookAppointment, 
  updateAppointment, 
  deleteAppointment 
} = require('../controllers/appointmentController');

// All appointment routes are protected (only logged-in users can access)
router.get('/', protect, getMyBookings);
router.post('/', protect, bookAppointment);
router.put('/:id', protect, updateAppointment);
router.delete('/:id', protect, deleteAppointment);

module.exports = router;