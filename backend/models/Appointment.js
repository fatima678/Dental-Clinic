const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  phone: String,
  date: String,
  time: String,
  service: String,
  status: { type: String, enum: ['pending','accepted','rejected','completed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
