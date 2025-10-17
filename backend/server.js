// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json()); // For parsing JSON body

// // Connect to MongoDB
// mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// // Define Schema
// const appointmentSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     date: String,
//     time: String,
//     service: String,
// }, { timestamps: true });

// const Appointment = mongoose.model('Appointment', appointmentSchema);

// // API route to save appointment
// app.post('/api/appointments', async (req, res) => {
//     try {
//         const appointment = new Appointment(req.body);
//         await appointment.save();
//         res.status(201).json({ message: 'Appointment booked successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// dental-clinic z456789fatima
// mongodb+srv://dental-clinic:<db_password>@cluster0.vxaxjwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON body

// ---------- MongoDB Connection with password embedded ----------
const mongoURI = 'mongodb+srv://dental-clinic:z456789fatima@cluster0.vxaxjwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// ---------- Schema ----------
const appointmentSchema = new mongoose.Schema({
    name: String,
    phone: String,
    date: String,
    time: String,
    service: String,
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

// ---------- API Routes ----------
app.post('/api/appointments', async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});


// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
