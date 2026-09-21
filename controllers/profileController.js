const userModel = require('../models/userModel');

// get the profile page + info
const getProfile = async (req, res) => {
  res.render('profile', {
    user: req.user,
  });
};

//get profile and update the info:

const getUpdateProfile = async (req, res) => {
  res.render('updateProfile', {
    user: req.user,
  });
};
const postUpdateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updateUserInfo = await userModel.findOneAndUpdate(req.user._id, {
      name,
      email,
    });
    // console.log(updateUserInfo);
    res.redirect('/profile');
  } catch (error) {
    console.log(error);
    res.send('Something Error Occured.', error);
  }
};

module.exports = {
  getProfile,
  getUpdateProfile,
  postUpdateProfile,
};
