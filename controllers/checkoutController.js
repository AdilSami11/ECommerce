const getCheckout = (req, res) => {
  res.render("checkout", { user: req.user });
};

module.exports = {
  getCheckout,
};
