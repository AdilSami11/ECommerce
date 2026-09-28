const express = require("express");
const router = express.Router();
const isLoggedIn = require("../utils/authMiddleWare.js");
const profileController = require("../controllers/profileController.js");
const uplaod = require("../config/multer.js");
// how profile page route GET Method:
router.get("/", isLoggedIn, profileController.getProfile);
router.get("/edit", isLoggedIn, profileController.getUpdateProfile);
router.post(
  "/edit",
  isLoggedIn,
  uplaod.single("profile"),
  profileController.postUpdateProfile,
);

module.exports = router;
