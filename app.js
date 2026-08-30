const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

// middleWares :
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Main Route');
});

app.listen(3000, () => {
  console.log('server is running....');
});
