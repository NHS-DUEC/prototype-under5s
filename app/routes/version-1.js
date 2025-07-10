var express = require('express');
var router = express.Router();

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

module.exports = router;
