const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/register', authController.getRegistration);
router.post('/register', authController.postRegistration);
router.get('/login', authController.getLogin);
router.post('/login', authController.postRegistration);

module.exports = router;
