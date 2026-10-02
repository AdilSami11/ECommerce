const cartModel = require("../models/cartModel");
const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");
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

const postCheckout = async (req, res) => {
  try {
    const { name, email, num, address, city } = req.body;

    const user = await userModel.findById(req.user._id).populate("cart");
    console.log(user);
    if (!user) return res.redirect("/auth/login");

    // if (user.cart.length === 0) {
    //   return res.redirect("/cart");
    // }

    // const items = user.cart.map((product) => ({
    //   product: product._id,
    //   quantity: 1,
    //   price: product.price,
    // }));

    // const total = user.cart.reduce((sum, product) => {
    //   return sum + product.price;
    // }, 0);

    // const order = await orderModel.create({
    //   user: user._id,
    //   items,
    //   name,
    //   email,
    //   num,
    //   address,
    //   city,
    //   total: total,
    //   status: "Processing",
    // });

    // user.cart = [];
    // await user.save();

    res.send("Ordered successfully !");
    // res.send("") // what if we create a produts has been ordered page..
  } catch (error) {
    console.log(error);
    res.status(500).send("Error placing order");
  }
};

module.exports = {
  getCheckout,
  postCheckout,
};
