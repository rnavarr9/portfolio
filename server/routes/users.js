/**
 * File name      : users.js
 * Student’s Name : Renzo Navarro
 * StudentID      : 301183749
 * Date           : 10/21/2021
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
