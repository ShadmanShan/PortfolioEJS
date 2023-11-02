var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us Page' });
});
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products Page' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services Page' });
});
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contact Us Page' });
});

module.exports = router;
