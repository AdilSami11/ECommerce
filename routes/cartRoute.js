const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const loggedIn = require('../utils/authMiddleWare');

// create cart by a loggedIn User:
router.post('/add/:id', loggedIn, cartController.addToCart); // it will be /cart/add/id
// get all carts:
router.get('/', loggedIn, cartController.getCarts); // it will be /cart + / = /cart

module.exports = router;
