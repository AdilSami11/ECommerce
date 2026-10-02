const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/checkoutController");
const loggedIn = require("../utils/authMiddleWare");

// get checkout page:
router.get("/", loggedIn, checkoutController.getCheckout); // it will be /checkout + / = /checkout
router.post("/place-order", loggedIn, checkoutController.postCheckout);
module.exports = router;
