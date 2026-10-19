const orderModel = require("../models/orderModel");
const cartModel = require("../models/cartModel");
// get orders

const getOrder = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ user: req.user._id })
      .populate("items.product");

    //Checking if cart have any item:
    const userCart = await cartModel.findOne({ user: req.user._id });
    const cartCount = userCart ? userCart.items.length : 0;

    res.render("orders", {
      user: req.user,
      orders,
      cartCount,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error in getting order.");
  }
};

module.exports = {
  getOrder,
};
