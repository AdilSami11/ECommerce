const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getRegistration = (req, res) => {
  res.render('register');
};

// Post registration (form submission)
const postRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.send(
        'Email already registered! <a href="/register">Try again</a>'
      );
    }

    // Encrypt password
    const hashPassword = await bcrypt.hash(password, 10);
    // Create user in MongoDB
    const createdUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    // Send confirmation or redirect
    res.send(
      'Registration successful! User saved to MongoDB. <a href="/login">Login Page</a>'
    );
  } catch (error) {
    res.send('Error in registration: ' + error.message);
  }
};

// ***********************************************************
// --- LOGIN LOGIC ---

const getLogin = (req, res) => {
  res.render('login');
};

const postLogin = async (req, res) => {};

module.exports = {
  getRegistration,
  postRegistration,
  getLogin,
};
