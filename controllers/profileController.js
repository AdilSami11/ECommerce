const userModel = require("../models/userModel");
const multer = require("multer");
const cartModel = require("../models/cartModel");
// get the profile page + info
const getProfile = async (req, res) => {
  try {
    const userCart = await cartModel.findOne({ user: req.user._id });
    const cartCount = userCart ? userCart.items.length : 0;

    res.render("profile", {
      user: req.user,
      cartCount,
    });
  } catch (error) {
    consoel.log(error);
    res.status(401).send("Error loading Profile Page.");
  }
};

//get profile and update the info:

const getUpdateProfile = async (req, res) => {
  res.render("updateProfile", {
    user: req.user,
  });
};

// postUpdate Logic:

const postUpdateProfile = async (req, res) => {
  try {
    // console.log("BODY:", req.body);
    // console.log("FILE:", req.file);
    const { name, email } = req.body;

    const updateUserInfo = await userModel.findOneAndUpdate(req.user._id, {
      name,
      email,
      picture: req.file ? req.file.filename : undefined,
    });

    console.log(updateUserInfo);
    res.redirect("/profile");
  } catch (error) {
    console.log(error);
    res.send("Something Error Occured.", error);
  }
};

module.exports = {
  getProfile,
  getUpdateProfile,
  postUpdateProfile,
};
