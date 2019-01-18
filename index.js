const volleyball = require('volleyball');
const express = require('express');
const app = express();

app.use(volleyball);

const staticMiddlewear = express.static('public');
app.use(staticMiddlewear);

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  console.log('hello world!');
});

const PORT = 6666;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
