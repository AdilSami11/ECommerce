const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hey it products Root Route....');
});

module.exports = router;
