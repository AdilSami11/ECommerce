const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');
const addProduct = require('./routes/addProductRoute');
const isLoggedIn = require('./utils/authMiddleWare');
dotenv.config();
// Import your new Auth Routes
// Database Connection
connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.use('/auth', authRoute);
app.use('/products', addProduct);

// Root Route
app.get('/', isLoggedIn, (req, res) => {
  res.render('index', { user: req.user });
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
