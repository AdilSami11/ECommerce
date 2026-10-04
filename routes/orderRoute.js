const express = require("express");
const router = express.Router();
const loggedIn = require("../utils/authMiddleWare");

// controller import:
const orderController = require("../controllers/orderController");

router.get("/", loggedIn, orderController.getOrder);

module.exports = router;
