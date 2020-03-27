var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { Data:process.env.npm_package_Data,title: 'Ravi Teja Pagidoju',About:'Nortwest Missouri State University Spring 2020 Batch'});
});

module.exports = router;
