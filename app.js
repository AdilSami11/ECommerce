const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const connectDB = require('./config/db');
const ownersRoutes = require('./routes/ownersRoutes');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');

// database Connection:
connectDB();

// middleWares :
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.use('/owners', ownersRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

app.listen(3000, () => {
  console.log('server is running....');
});
