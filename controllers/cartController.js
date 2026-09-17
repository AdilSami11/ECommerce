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
      user: req.user.id,
    });

    // If user doesn't have a cart yet
    if (!cart) {
      const createdCart = await cartModel.create({
        user: req.user.id,
        items: [
          {
            product: product._id,
            quantity: 1,
          },
        ],
      });
    } else {
      const existingItem = cart.items.find(
        (item) => item.product.toString() === product._id.toString()
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({
          product: product._id,
          quantity: 1,
        });
      }
      await cart.save();
    }

    res.send('Product added to cart');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding product to cart');
  }
};

// get all carts:

const getCarts = async (req, res) => {
  try {
    const cart = await cartModel
      .findOne({ user: req.user.id })
      .populate('items.product');

    if (!cart) {
      return res.render('cart', { cart: null });
    }
    res.render('cart', { cart });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error loading cart');
  }
};

module.exports = {
  addToCart,
  getCarts,
};
