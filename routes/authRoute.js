const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// Register Routes
router.get('/register', authController.getRegistration);
router.post('/register', authController.postRegistration);

// Login Routes
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

//logOut Route
router.get('/logout', authController.logOut);

module.exports = router;
