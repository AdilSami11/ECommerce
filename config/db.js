const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log('Database is connected!');
  } catch (error) {
    console.log('Database cannot connect:', error.message);
  }
};

module.exports = connectDB;
