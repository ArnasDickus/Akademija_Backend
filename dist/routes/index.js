"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res) {
  res.send('Index file');
});
module.exports = router; // export = router;