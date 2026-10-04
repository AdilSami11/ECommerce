const orderModel = require("../models/orderModel");

// get orders

const getOrder = async (req, res) => {
  try {
    const orderItems = await orderModel
      .find({ user: req.user._id })
      .populate("items.product");
    console.log(orderItems);
    res.render("orders", {
      orderItems,
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
