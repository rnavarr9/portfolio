var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', pageName: "Home Page" });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', pageName: "Home Page" });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', pageName: "About Page" });
});

/* GET Product page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products', pageName: "Products Page" });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', pageName: "Services page" });
});

/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', pageName: "Contact page" });
});


module.exports = router;
