// // // const express = require('express');
// // // const router = express.Router();
// // // const jwt = require('jsonwebtoken');
// // // const bcrypt = require('bcryptjs');
// // // const mongoose = require('mongoose');

// // // // ----- User Schema -----
// // // const userSchema = new mongoose.Schema({
// // //   name: String,
// // //   email: { type: String, unique: true },
// // //   password: String,
// // // });

// // // const User = mongoose.model('User', userSchema);

// // // // ----- Register -----
// // // router.post('/register', async (req, res) => {
// // //   try {
// // //     const { name, email, password } = req.body;

// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser)
// // //       return res.status(400).json({ message: 'User already exists' });

// // //     const hashedPassword = await bcrypt.hash(password, 10);
// // //     const user = new User({ name, email, password: hashedPassword });
// // //     await user.save();

// // //     res.status(201).json({ message: 'User registered successfully' });
// // //   } catch (error) {
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // // ----- Login -----
// // // router.post('/login', async (req, res) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     const user = await User.findOne({ email });

// // //     if (!user) return res.status(404).json({ message: 'User not found' });

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

// // //     const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1d' });

// // //     res.json({ message: 'Login successful', token, user });
// // //   } catch (error) {
// // //     res.status(500).json({ error: 'Server error' });
// // //   }
// // // });

// // // module.exports = router;


// // const express = require("express");
// // const router = express.Router();
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User");
// // const bcrypt = require("bcryptjs");

// // // Generate Token Function
// // const generateToken = (id) => {
// //   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
// // };

// // // --- Register ---
// // router.post("/register", async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     const user = await User.create({ name, email, password });
// //     const token = generateToken(user._id);

// //     res.status(201).json({
// //       _id: user._id,
// //       name: user.name,
// //       email: user.email,
// //       token,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error" });
// //   }
// // });

// // // --- Login ---
// // router.post("/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: "Invalid credentials" });

// //     const isMatch = await user.matchPassword(password);
// //     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

// //     const token = generateToken(user._id);

// //     res.status(200).json({
// //       _id: user._id,
// //       name: user.name,
// //       email: user.email,
// //       token,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error" });
// //   }
// // });

// // module.exports = router;



// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const router = express.Router();
// const mongoose = require("mongoose");

// // ---------- User Model ----------
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model("User", userSchema);

// // ---------- Register ----------
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     // Generate token
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//     res.status(201).json({ message: "User registered successfully", token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ---------- Login ----------
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
console.log("✅ auth routes loaded");




const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
