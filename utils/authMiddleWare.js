const jwt = require('jsonwebtoken');

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.redirect('/auth/login');

    const ver_User = jwt.verify(token, process.env.Secret_Key || 'mysecretkey');

    req.user = ver_User;
    next();
  } catch (error) {
    res.clearCookie('token');
    res.redirect('/auth/login');
  }
};

module.exports = isLoggedIn;
