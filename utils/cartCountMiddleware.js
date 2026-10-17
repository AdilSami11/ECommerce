const cartModel = require("../models/cartModel");

const cartCountMiddleWare = async (req, res, next) => {
  try {
    res.locals.cartCount = 0;

    if (req.user) {
      const cart = await cartModel.findOne({
        user: req.user._id,
      });

      res.locals.cartCount = cart
        ? cart.items.reduce((total, item) => total + item.quantity, 0)
        : 0;
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = cartCountMiddleWare;
