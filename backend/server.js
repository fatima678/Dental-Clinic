// // // // // // const express = require('express');
// // // // // // const mongoose = require('mongoose');
// // // // // // const cors = require('cors');

// // // // // // const app = express();
// // // // // // app.use(cors());
// // // // // // app.use(express.json()); // For parsing JSON body

// // // // // // // Connect to MongoDB
// // // // // // mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', {
// // // // // //     useNewUrlParser: true,
// // // // // //     useUnifiedTopology: true
// // // // // // }).then(() => console.log('MongoDB Connected'))
// // // // // //   .catch(err => console.log(err));

// // // // // // // Define Schema
// // // // // // const appointmentSchema = new mongoose.Schema({
// // // // // //     name: String,
// // // // // //     phone: String,
// // // // // //     date: String,
// // // // // //     time: String,
// // // // // //     service: String,
// // // // // // }, { timestamps: true });

// // // // // // const Appointment = mongoose.model('Appointment', appointmentSchema);

// // // // // // // API route to save appointment
// // // // // // app.post('/api/appointments', async (req, res) => {
// // // // // //     try {
// // // // // //         const appointment = new Appointment(req.body);
// // // // // //         await appointment.save();
// // // // // //         res.status(201).json({ message: 'Appointment booked successfully' });
// // // // // //     } catch (error) {
// // // // // //         res.status(500).json({ error: 'Server error' });
// // // // // //     }
// // // // // // });

// // // // // // const PORT = process.env.PORT || 5000;
// // // // // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // // // // // dental-clinic z456789fatima
// // // // // // mongodb+srv://dental-clinic:<db_password>@cluster0.vxaxjwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// // // // // const express = require('express');
// // // // // const mongoose = require('mongoose');
// // // // // const cors = require('cors');

// // // // // const app = express();
// // // // // app.use(cors());
// // // // // app.use(express.json()); // For parsing JSON body

// // // // // // ---------- MongoDB Connection with password embedded ----------
// // // // // const mongoURI = 'mongodb+srv://dental-clinic:z456789fatima@cluster0.vxaxjwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// // // // // mongoose.connect(mongoURI, {
// // // // //     useNewUrlParser: true,
// // // // //     useUnifiedTopology: true
// // // // // }).then(() => console.log('MongoDB Connected'))
// // // // //   .catch(err => console.log('MongoDB connection error:', err));

// // // // // // ---------- Schema ----------
// // // // // const appointmentSchema = new mongoose.Schema({
// // // // //     name: String,
// // // // //     phone: String,
// // // // //     date: String,
// // // // //     time: String,
// // // // //     service: String,
// // // // // }, { timestamps: true });

// // // // // const Appointment = mongoose.model('Appointment', appointmentSchema);

// // // // // // ---------- API Routes ----------
// // // // // app.post('/api/appointments', async (req, res) => {
// // // // //     try {
// // // // //         const appointment = new Appointment(req.body);
// // // // //         await appointment.save();
// // // // //         res.status(201).json({ message: 'Appointment booked successfully' });
// // // // //     } catch (error) {
// // // // //         console.error(error);
// // // // //         res.status(500).json({ error: 'Server error' });
// // // // //     }
// // // // // });

// // // // // app.get('/api/appointments', async (req, res) => {
// // // // //     try {
// // // // //         const appointments = await Appointment.find();
// // // // //         res.status(200).json(appointments);
// // // // //     } catch (error) {
// // // // //         res.status(500).json({ error: 'Server error' });
// // // // //     }
// // // // // });


// // // // // // ---------- Start Server ----------
// // // // // const PORT = process.env.PORT || 5000;
// // // // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // // // require('dotenv').config();
// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const cors = require('cors');

// // // // const app = express();
// // // // app.use(cors());
// // // // app.use(express.json());

// // // // // ---------- MongoDB Connection ----------
// // // // mongoose.connect(process.env.MONGO_URI, {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true,
// // // // })
// // // //   .then(() => console.log('✅ MongoDB Connected'))
// // // //   .catch(err => console.log('MongoDB connection error:', err));

// // // // // ---------- Models ----------
// // // // const Appointment = mongoose.model('Appointment', new mongoose.Schema({
// // // //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// // // //   name: String,
// // // //   phone: String,
// // // //   date: String,
// // // //   time: String,
// // // //   service: String,
// // // //   status: { type: String, enum: ['pending','accepted','rejected','completed'], default: 'pending' }
// // // // }, { timestamps: true }));

// // // // // ---------- Routes ----------
// // // // const verifyToken = require('./middleware/verifyToken');
// // // // const authRoutes = require('./routes/auth');
// // // // app.use('/api/auth', authRoutes);

// // // // const authRoutes = require("./routes/auth");
// // // // // Protected POST (only logged-in users)
// // // // app.post('/api/appointments', verifyToken, async (req, res) => {
// // // //   try {
// // // //     const { name, phone, date, time, service } = req.body;
// // // //     const appointment = new Appointment({ userId: req.user.id, name, phone, date, time, service });
// // // //     await appointment.save();
// // // //     res.status(201).json({ message: 'Appointment booked successfully', appointment });
// // // //   } catch (error) {
// // // //     console.error(error);
// // // //     res.status(500).json({ error: 'Server error' });
// // // //   }
// // // // });

// // // // // Public GET (for admin, or later protect)
// // // // app.get('/api/appointments', async (req, res) => {
// // // //   try {
// // // //     const appointments = await Appointment.find();
// // // //     res.status(200).json(appointments);
// // // //   } catch (error) {
// // // //     res.status(500).json({ error: 'Server error' });
// // // //   }
// // // // });

// // // // // Logged-in user’s appointments
// // // // app.get('/api/appointments/my', verifyToken, async (req, res) => {
// // // //   try {
// // // //     const appointments = await Appointment.find({ userId: req.user.id });
// // // //     res.status(200).json(appointments);
// // // //   } catch (error) {
// // // //     res.status(500).json({ error: 'Server error' });
// // // //   }
// // // // });

// // // // // ---------- Start Server ----------
// // // // const PORT = process.env.PORT || 5000;
// // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// // // require('dotenv').config();
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // ---------- MongoDB Connection ----------
// // // mongoose.connect(process.env.MONGO_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // //   .then(() => console.log('✅ MongoDB Connected'))
// // //   .catch(err => console.log('MongoDB connection error:', err));

// // // // ---------- Models ----------
// // // const Appointment = mongoose.model('Appointment', new mongoose.Schema({
// // //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// // //   name: String,
// // //   phone: String,
// // //   date: String,
// // //   time: String,
// // //   service: String,
// // //   status: { type: String, enum: ['pending','accepted','rejected','completed'], default: 'pending' }
// // // }, { timestamps: true }));

// // // // ---------- Routes ----------
// // // const verifyToken = require('./middleware/verifyToken');
// // // const authRoutes = require('./routes/auth');
// // // app.use('/api/auth', authRoutes);

// // // // Protected POST (only logged-in users)
// // // app.post('/api/appointments', verifyToken, async (req, res) => {
// // //   try {
// // //     const { name, phone, date, time, service } = req.body;
// // //     const appointment = new Appointment({ userId: req.user.id, name, phone, date, time, service });
// // //     await appointment.save();
// // //     res.status(201).json({ message: 'Appointment booked successfully', appointment });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // // Public GET (for admin, or later protect)
// // // app.get('/api/appointments', async (req, res) => {
// // //   try {
// // //     const appointments = await Appointment.find();
// // //     res.status(200).json(appointments);
// // //   } catch (error) {
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // // Logged-in user's appointments
// // // app.get('/api/appointments/my', verifyToken, async (req, res) => {
// // //   try {
// // //     const appointments = await Appointment.find({ userId: req.user.id });
// // //     res.status(200).json(appointments);
// // //   } catch (error) {
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // // ---------- Start Server ----------
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// // require('dotenv').config();
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // ---------- MongoDB Connection ----------
// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// //   .then(() => console.log('✅ MongoDB Connected'))
// //   .catch(err => console.log('MongoDB connection error:', err));

// // // ---------- Models ----------
// // const Appointment = mongoose.model('Appointment', new mongoose.Schema({
// //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// //   name: String,
// //   phone: String,
// //   date: String,
// //   time: String,
// //   service: String,
// //   status: { type: String, enum: ['pending','accepted','rejected','completed'], default: 'pending' }
// // }, { timestamps: true }));

// // // ---------- Middleware & Routes ----------
// // const verifyToken = require('./middleware/verifyToken');
// // const authRoutes = require('./routes/auth'); // ✅ only one import

// // // Use the routes
// // app.use('/api/auth', authRoutes);

// // // ---------- Appointment Routes ----------
// // app.post('/api/appointments', verifyToken, async (req, res) => {
// //   try {
// //     const { name, phone, date, time, service } = req.body;
// //     const appointment = new Appointment({ userId: req.user.id, name, phone, date, time, service });
// //     await appointment.save();
// //     res.status(201).json({ message: 'Appointment booked successfully', appointment });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // app.get('/api/appointments', async (req, res) => {
// //   try {
// //     const appointments = await Appointment.find();
// //     res.status(200).json(appointments);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // app.get('/api/appointments/my', verifyToken, async (req, res) => {
// //   try {
// //     const appointments = await Appointment.find({ userId: req.user.id });
// //     res.status(200).json(appointments);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // // ---------- Start Server ----------
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const verifyToken = require('./middleware/verifyToken');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connect
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('✅ MongoDB Connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// // ✅ Routes
// const authRoutes = require('./routes/auth');
// const appointmentRoutes = require('./routes/appointment');

// app.use('/api/auth', authRoutes);
// app.use('/api/appointments', appointmentRoutes);

// // ✅ Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
const appointmentRoutes = require('./routes/appointment');
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
