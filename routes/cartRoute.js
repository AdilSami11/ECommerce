const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const loggedIn = require('../utils/authMiddleWare');

router.post('/add/:id', loggedIn, cartController.addToCart);

module.exports = router;
