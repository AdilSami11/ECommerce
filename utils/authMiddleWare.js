const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.redirect("/auth/login");
    }

    const decoded = jwt.verify(token, process.env.Secret_Key || "mysecretkey");

    const user = await userModel.findById(decoded.id);

    if (!user) {
      res.clearCookie("token");
      return res.redirect("/auth/login");
    }

    req.user = user;
    next();
  } catch (error) {
    res.clearCookie("token");
    return res.redirect("/auth/login");
  }
};

module.exports = isLoggedIn;
