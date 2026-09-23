const isAdmin = async (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).redirect('/auth/login');
  }
  next();
};

module.exports = isAdmin;
