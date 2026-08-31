const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/store');

    console.log('database is connected!');
  } catch (error) {
    console.log('Database cannot connected due to some issue', error);
  }
};

module.exports = connectDB;
