const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT        || 4000;
const db   = 'mongodb+srv://tato2004:tato123456@cluster0.0akxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/', require('./routes/user.js'));
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.get('/', (req, res) => {
    res.send('Hello world');
  });
  app.listen(4000);  
