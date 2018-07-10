const Grocery = require('../db/Grocery');

const path = require('path');
const express = require('express');
const app = express();

// add logging middleware
app.use(function f1(req, res, next) {
  console.log(req.method, req.path);
  next();
});

// serve static assets
app.use(express.static(path.join(__dirname, '../client/dist')));

// parse the body on post req
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// define routes for resource /groceries
// use the methods on the Grocery model
// GET /groceries --> getAll
app.get('/groceries', (req, res) => {
  Grocery.getAll((err, groceries) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(groceries);
    }
  });
});

// POST /groceries --> add
app.post('/groceries', (req, res) => {
  const { name, quantity } = req.body;
  if (!quantity || typeof quantity !== 'number') {
    return res.status(400).send({ message: 'You didn\'t say how many!' });
  }
  Grocery.add(name, quantity, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.sendStatus(201);
  });
});

app.listen(3000, () => console.log('Web server listening on localhost:3000'));
