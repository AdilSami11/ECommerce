const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.redirect('/auth/login');

    const ver_User = jwt.verify(token, process.env.Secret_Key || 'mysecretkey');
    const user = await userModel.findById(ver_User.id);
    req.user = user;
    next();
  } catch (error) {
    res.clearCookie('token');
    res.redirect('/auth/login');
  }
};

module.exports = isLoggedIn;
