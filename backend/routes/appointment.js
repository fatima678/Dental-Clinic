// // const express = require('express');
// // const router = express.Router();
// // const Appointment = require('../models/Appointment');
// // const verifyToken = require('../middleware/verifyToken');

// // // Create appointment (protected)
// // router.post('/', verifyToken, async (req, res) => {
// //   try {
// //     const { name, phone, date, time, service } = req.body;
// //     const appointment = new Appointment({
// //       userId: req.user.id,
// //       name, phone, date, time, service
// //     });
// //     await appointment.save();
// //     res.status(201).json({ message: 'Appointment booked successfully', appointment });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: 'Error saving appointment' });
// //   }
// // });

// // // Get all appointments (admin only)
// // router.get('/', verifyToken, async (req, res) => {
// //   try {
// //     if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
// //     const appts = await Appointment.find().populate('userId', 'name email').sort({ createdAt: -1 });
// //     res.json(appts);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error fetching appointments' });
// //   }
// // });

// // // Get logged-in user's appointments
// // router.get('/my', verifyToken, async (req, res) => {
// //   try {
// //     const appts = await Appointment.find({ userId: req.user.id }).sort({ createdAt: -1 });
// //     res.json(appts);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error fetching user appointments' });
// //   }
// // });

// // // Update appointment status (admin)
// // router.put('/:id/status', verifyToken, async (req, res) => {
// //   try {
// //     if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
// //     const { status } = req.body; // 'accepted' | 'rejected' | 'completed'
// //     const appt = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
// //     res.json(appt);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error updating appointment' });
// //   }
// // });

// // // Delete appointment (admin)
// // router.delete('/:id', verifyToken, async (req, res) => {
// //   try {
// //     if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
// //     await Appointment.findByIdAndDelete(req.params.id);
// //     res.json({ message: 'Deleted' });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error deleting appointment' });
// //   }
// // });

// // module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Appointment = require('../models/Appointment');

// // -------------------------
// // Create appointment (public, no login required)
// // -------------------------
// router.post('/', async (req, res) => {
//   try {
//     const { name, phone, date, time, service } = req.body;

//     if (!name || !phone || !date || !time || !service) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const appointment = new Appointment({ name, phone, date, time, service });
//     await appointment.save();

//     res.status(201).json({ message: 'Appointment booked successfully', appointment });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error saving appointment' });
//   }
// });

// // -------------------------
// // Get all appointments (admin only, still protected)
// // -------------------------
// router.get('/', verifyToken, async (req, res) => {
//   try {
//     if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
//     const appts = await Appointment.find().populate('userId', 'name email').sort({ createdAt: -1 });
//     res.json(appts);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching appointments' });
//   }
// });

// // -------------------------
// // Get logged-in user's appointments
// // -------------------------
// router.get('/my', verifyToken, async (req, res) => {
//   try {
//     const appts = await Appointment.find({ userId: req.user.id }).sort({ createdAt: -1 });
//     res.json(appts);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching user appointments' });
//   }
// });

// // -------------------------
// // Update appointment status (admin)
// // -------------------------
// router.put('/:id/status', verifyToken, async (req, res) => {
//   try {
//     if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
//     const { status } = req.body; // 'accepted' | 'rejected' | 'completed'
//     const appt = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
//     res.json(appt);
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating appointment' });
//   }
// });

// // -------------------------
// // Delete appointment (admin)
// // -------------------------
// router.delete('/:id', verifyToken, async (req, res) => {
//   try {
//     if(req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
//     await Appointment.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Deleted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting appointment' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Create appointment (simple, public)
router.post('/', async (req, res) => {
  try {
    const { name, phone, date, time, service } = req.body;

    if (!name || !phone || !date || !time || !service) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const appointment = new Appointment({ name, phone, date, time, service });
    await appointment.save();

    res.status(201).json({ message: 'Appointment booked successfully', appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving appointment' });
  }
});

module.exports = router;
