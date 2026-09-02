const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-Model');

router.get('/', (req, res) => {
  res.send('Hey it Owner Root Route....');
});

if (process.env.NODE_ENV === 'development') {
  router.post('/create', (req, res) => {
    res.send('Hey Create Route is Working..');
  });
}

module.exports = router;
