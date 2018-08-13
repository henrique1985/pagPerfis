var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Segunda coe' });
});

router.get('/helicopterson', function(req, res, next) {
  res.render('bio');
});

module.exports = router;
