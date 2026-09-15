const cartModel = require('../models/cartModel');
const productModel = require('../models/productModel');

const addToCart = async (req, res) => {
  try {
    const { id } = req.params; //find the selected by id product in product database:
    const product = await productModel.findById(id);

    if (!product) return res.status(404).send('Product not found');
    //debugging:
    console.log(product);
    // res.redirect('/products');

    const cart = await cartModel.findOne({
      user: req.user._id,
    });

    // If user doesn't have a cart yet
    if (!cart) {
      cart = await cartModel.create({
        user: req.user._id,

        items: [
          {
            product: product._id,
            quantity: 1,
          },
        ],
      });
    }

    console.log(cart);
    res.send('Product added to cart');
    } catch (error) {
    console.log(error);
    res.status(500).send('Error adding product to cart');
  }
};

module.exports = {
  addToCart,
};
