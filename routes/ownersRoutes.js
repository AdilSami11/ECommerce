const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hey it Owner Root Route....');
});

module.exports = router;
