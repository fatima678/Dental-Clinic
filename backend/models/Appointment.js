// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   name: String,
//   phone: String,
//   date: String,
//   time: String,
//   service: String,
//   status: { type: String, enum: ['pending','accepted','rejected','completed'], default: 'pending' }
// }, { timestamps: true });

// module.exports = mongoose.model('Appointment', appointmentSchema);


const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    service: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
