const volleyball = require('volleyball');
const express = require('express');
const app = express();
const { db } = require('./models');
const models = require('./models');
const wikiRoute = require('./routes/wiki')
const userRoute = require('./routes/user')

app.use('/wiki', wikiRoute)
app.use('/user', userRoute)

app.use(volleyball);

const staticMiddlewear = express.static('public');
app.use(staticMiddlewear);

app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

const init = async () => {
  await models.db.sync();
  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
