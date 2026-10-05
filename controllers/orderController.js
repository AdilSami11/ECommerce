const orderModel = require("../models/orderModel");

// get orders

const getOrder = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ user: req.user._id })
      .populate("items.product");
    console.log(orders);
    res.render("orders", {
      orders,
      user: req.user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error in getting order.");
  }
};

module.exports = {
  getOrder,
};
