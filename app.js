const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const isLoggedIn = require("./utils/authMiddleWare");
const productModel = require("./models/productModel");
const cartModel = require("./models/cartModel");
// routess.....
const productRoute = require("./routes/productRoute");
const authRoute = require("./routes/authRoute");
const cartRoute = require("./routes/cartRoute");
const profileRoute = require("./routes/userProfileRoute");
const checkoutRoute = require("./routes/checkoutRoute");
const orderRoute = require("./routes/orderRoute");
dotenv.config();
// Import your new Auth Routes
// Database Connection
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/profile", profileRoute);
app.use("/checkout", checkoutRoute);
app.use("/order", orderRoute);
// Root(main Page) Route
app.get("/", isLoggedIn, async (req, res) => {
  try {
    const product = await productModel.find().limit(3);
    const userCart = await cartModel.findOne({ user: req.user._id });
    const cartCount = userCart ? userCart.items.length : 0;
    res.render("index", {
      user: req.user,
      product,
      cartCount,
    });
  } catch (error) {
    res.send("Error at rendering product from Db...", error);
  }
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
