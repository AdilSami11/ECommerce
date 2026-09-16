const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const loggedIn = require('../utils/authMiddleWare');

// create cart by a loggedIn User:
router.post('/add/:id', loggedIn, cartController.addToCart);
// get all carts:
router.get('/', loggedIn, cartController.getCarts);

module.exports = router;
