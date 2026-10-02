const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  picture: {
    type: String,
    default: "/uploads/profile-img.webp",
  },
});

module.exports = mongoose.model("user", userSchema);
