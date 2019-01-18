const volleyball = require('volleyball');
const express = require('express');
const app = express();
const { db } = require('./models');
const models = require('./models');

app.use(volleyball);

const staticMiddlewear = express.static('public');
app.use(staticMiddlewear);

app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res, next) => {
  //console.log('hello world!');
  res.send('hello world');
});

const init = async () => {
  await models.db.sync();
  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
