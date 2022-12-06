var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.send('Novedades home page');
});

router.get('/detalles', function(req, res) {
  res.send('Detalles de novedades');
});

module.exports = router;