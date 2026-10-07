const cartModel = require("../models/cartModel");
const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");
const getCheckout = async (req, res) => {
  try {
    const cart = await cartModel
      .findOne({ user: req.user.id })
      .populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.redirect("/cart");
    }

    const cartCount = cart ? cart.items.length : 0;
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
      cartCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in getting Cart from logged In User.");
  }
};

const postCheckout = async (req, res) => {
  try {
    const { name, email, num, address, city } = req.body;

    const user = await userModel.findById(req.user._id);
    console.log(user);
    if (!user) return res.redirect("/auth/login");

    const cart = await cartModel
      .findOne({ user: req.user.id })
      .populate("items.product");
    // console.log(cart);

    if (!cart || cart.items.length === 0) {
      return res.redirect("/cart");
    }

    const items = cart.items.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
    }));
    // console.log(items);

    const subTotal = cart.items.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    const shipping = 200;

    const total = subTotal + shipping;
    //----------------------------------------------------------

    const order = await orderModel.create({
      user: req.user._id,
      items,
      name,
      email,
      num,
      address,
      city,
      total,
    });
    // console.log(order);

    cart.items = [];
    await cart.save();

    res.send("Ordered successfully !");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error placing order");
  }
};

module.exports = {
  getCheckout,
  postCheckout,
};
