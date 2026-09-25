const express = require('express');
const router = express.Router();
const isLoggedIn = require('../utils/authMiddleWare');
const isAdmin = require('../utils/adminMiddleware');

// import controller
const productController = require('../controllers/productController');

// product page view + Add product route:
router.get('/add', isLoggedIn, isAdmin, productController.getAddProduct);
router.post('/add', isLoggedIn, isAdmin, productController.postAddProduct);
router.get('/', isLoggedIn, isAdmin, productController.getProducts);
router.get('/:id', isLoggedIn, productController.getProductById);
router.post(
  '/delete/:id',
  isLoggedIn,
  isAdmin,
  productController.deleteProduct
);

module.exports = router;
