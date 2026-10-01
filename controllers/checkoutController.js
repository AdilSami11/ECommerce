const cartModel = require("../models/cartModel");

const getCheckout = async (req, res) => {
  const cart = await cartModel
    .findOne({ user: req.user._id })
    .populate("items.product");

  if (!cart || cart.items.length === 0) {
    return res.redirect("/cart");
  }

  let subTotal = 0;
  cart.items.forEach((item) => {
    subTotal = subTotal + item.product.price * item.quantity;
  });

  const shipping = 200;
  let total = subTotal + shipping;
  res.render("checkout", {
    user: req.user,
    cart,
    subTotal,
    shipping,
    total,
  });
};

module.exports = {
  getCheckout,
};
