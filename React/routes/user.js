const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user', (req, res) => {
  User.find((err, user) => {
    res.json(user);
  });
});

module.exports = router;