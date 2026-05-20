const Appointment = require('../models/Appointment');

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Appointment.find({ userEmail: req.user.email });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const bookAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({
      ...req.body,
      userEmail: req.user.email
    });
    res.status(201).json({
      message: 'Appointment booked successfully!',
      appointment
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({
      message: 'Appointment updated successfully!',
      updated
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getMyBookings, bookAppointment, updateAppointment, deleteAppointment };