const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(`${config.get('MONGO_URL')}/store`);

    dbgr('Database is connected!');
  } catch (error) {
    dbgr('Database cannot connect:', error.message);
  }
};

module.exports = connectDB;
  