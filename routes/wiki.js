const express = require('express');
const router = express.Router();
const { Page } = require('../models');
const { addPage } = require('../views');

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  const authorName = req.body.authorName;
  const email = req.body.email;
  const pageTitle = req.body.title;
  const newContent = req.body.content;
  const status = req.body.status;
  const page = new Page({
    title: pageTitle,
    content: newContent,
  });
  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
