const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-Model');

router.get('/', (req, res) => {
  res.send('Hey it Owner Root Route....');
});

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  router.post('/create', async (req, res) => {
    let owner = await ownerModel.find();
    console.log(owner);
    if (owner.length > 0) {
      return res
        .status(503)
        .send('Main owner is alraedy Exists You can Not Accessed!');
    }
    res.send('We can Create a New User!');
    let createdOwner = await ownerModel.create({
      name: 'AdilSami',
      email: 'adilsamikhan2005@gmail.com',
      password: 'Adieyy2005',
      gstin: 'gstn-16202-8571-1',
    });
    res.status(201).send(createdOwner);
  });
}

module.exports = router;
