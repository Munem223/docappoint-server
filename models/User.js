const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  photoURL: { 
    type: String, 
    default: 'https://i.ibb.co/5Y0Y7vJ/default-avatar.png' 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);