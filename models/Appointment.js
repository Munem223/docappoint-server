const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userEmail: { 
    type: String, 
    required: true 
  },
  doctorName: { 
    type: String, 
    required: true 
  },
  patientName: { 
    type: String, 
    required: true 
  },
  gender: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  appointmentDate: { 
    type: String, 
    required: true 
  },
  appointmentTime: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);