const express = require('express');
const router = express.Router();

// import controller
const productController = require('../controllers/productController');

// product page view + Add product route:
router.get('/add', productController.getAddProduct);
router.post('/add', productController.postAddProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
module.exports = router;
