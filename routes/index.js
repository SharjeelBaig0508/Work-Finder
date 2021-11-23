var express = require('express');
var router = express.Router();

/* GET Server Running. */
router.get('/', function(req, res, next) {
  res.json("Server is running! Yatta!");
});

module.exports = router;
