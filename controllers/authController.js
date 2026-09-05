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
      'Registration successful! User saved to MongoDB. <a href="/auth/login">Login Page</a>'
    );
  } catch (error) {
    res.send('Error in registration: ' + error.message);
  }
};

// --- LOGIN LOGIC ---

const getLogin = (req, res) => {
  res.render('login');
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await userModel.findOne({ email });

    if (!checkUser)
      return res.send(
        'Invalid credentials! <a href="/auth/login">Try again</a>'
      );

    // matching the password with existing user to newly enterd password:

    const isMatch = await bcrypt.compare(password, checkUser.password);
    if (!isMatch)
      return res.send(
        'Invalid credentials! <a href="/auth/login">Try again</a>'
      );

    // Assigning Cookie to Correct User
    const token = jwt.sign(
      {
        id: checkUser._id,
        email: checkUser.email,
        password: checkUser.password,
      },
      process.env.Secret_Key || 'mysecretkey'
    );
    // sending Cookie to Ui/Frontend
    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    res.send('Error', error);
  }
};

// LOGOUT LOGIC:

const logOut = async (req, res) => {
  res.clearCookie('token');
  res.redirect('/auth/login');
};

module.exports = {
  getRegistration,
  postRegistration,
  getLogin,
  postLogin,
  logOut,
};
