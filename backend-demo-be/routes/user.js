var express = require('express');
var router = express.Router();
var users = [{
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
}];

/* GET users listing. */
router.get('/api/resource/user', function(req, res) {
  res.send(users);
});

router.post('/api/resource/user', function(req, res) {
  console.log(req.body);
  if (req.body.firstName && req.body.lastName && req.body.personalInfo) {
    users.push(req.body);
  }
  res.send(req.body);
});

module.exports = router;
