var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mock', function(req, res, next) {
  res.render('mockup', { title: 'Express' });
});
module.exports = router;
