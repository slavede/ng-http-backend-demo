var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/resource/user', function(req, res) {
  res.send([{
    firstName : 'Slaven',
    lastName : 'Tomac',
    personalInfo: {
      age: 30,
      gender: 'm'
    }
  }, {
    firstName : 'Katarina',
    lastName : 'Tomac',
    personalInfo: {
      age: 28,
      gender: 'f'
    }
  }]);
});

module.exports = router;
