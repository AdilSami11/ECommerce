const express = require('express');
const router = express.Router();

// import controller
const productController = require('../controllers/productController');

// product page view + Add product route:
router.get('/add', productController.getAddProduct);
router.post('/add', productController.postAddProduct);

module.exports = router;
