const express = require('express');

const path = require("path");

const rootDir = require('../utils/path');


const router = express.Router();

//get, post, patch, delete, put matches the full path (i.e '/' here)
router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express!</h1>');
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


module.exports = router;