var express = require('express');
var router = express.Router();
const utils = require('../lib/utils');

router.post('/age', function(req, res, next){
  var age = req.session.data['age'];
  if(age >= 5) {
    console.log('older than 5')
    return res.redirect('sex');
  } else {
    console.log('older than 5')
    return res.redirect('sex');
  }
});

router.post('/where-are-you-now', function(req, res){
  var currentLocationPostcode = req.session.data.location.current;
  if (utils.containsSubstring(currentLocationPostcode, 'LS14')) {
    return res.redirect('age-pilot')
  } else {
    return res.redirect('age')
  }
});

router.post('/age-pilot', function(req, res){
  var age = req.session.data.age;
  if (age < 5) {
    return res.redirect('age-clarify')
  } else {
    return res.redirect('sex')
  }
});

module.exports = router;
