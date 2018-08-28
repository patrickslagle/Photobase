const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function(req, res, next) {
  // send the index.html or bundle file
  res.sendFile(path.join(__dirname, './../index.html'));
});

// router.post('/api', function(req, res, next) {
  
// });

module.exports = router;