const userModel = require('../models/userModel');

// get the profile page + info
const getProfile = async (req, res) => {
  res.render('profile', {
    user: req.user,
  });
};

module.exports = {
  getProfile,
};
