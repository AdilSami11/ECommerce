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

module.exports = {
  getAddProduct,
  postAddProduct,
};
