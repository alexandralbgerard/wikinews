const volleyball = require('volleyball');
const express = require('express');
const app = express();
const { db } = require('./models');

app.use(volleyball);

const staticMiddlewear = express.static('public');
app.use(staticMiddlewear);

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res, next) => {
  console.log('hello world!');
  res.send('');
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
