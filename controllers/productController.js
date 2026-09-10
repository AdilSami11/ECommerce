const productModel = require('../models/productModel');

//get method
const getAddProduct = (req, res) => {
  res.render('createProduct');
};

// post method

const postAddProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
      image,
      description,
    } = req.body;

    // Adding product
    const addProduct = await productModel.create({
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
      image,
      description,
    });
    res.send(
      'Product created successfully! <a href="/products/add">Add Another</a> | <a href="/">Go to Shop</a>'
    );
    console.log(addProduct);
  } catch (error) {
    res.send('Error', error);
  }
};

// get all products and show on page :

const getProducts = async (req, res) => {
  try {
    const getAllProducts = await productModel.find();
    res.render('products', { getAllProducts });
  } catch (error) {
    res.send('Error :', error);
  }
};

// product by Id:

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) return res.status(404).send('Product not found');
    res.render('productById', { product });
  } catch (error) {
    res.send('Error : ', error);
  }
};

module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts,
  getProductById,
};
