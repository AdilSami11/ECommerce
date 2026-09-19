const express = require('express');
const router = express.Router();
const isLoggedIn = require('../utils/authMiddleWare.js');
const profileController = require('../controllers/profileController.js');

// how profile page route GET Method:

router.get('/', isLoggedIn, profileController.getProfile);

module.exports = router;
