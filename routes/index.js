var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).render('index', {
    title: "Wami Project",
    desc: ""
  });
});

router.get('/wami', function(req, res, next) {
  res.status(200).render('wami', {
    title: "Wami page",
    desc: ""
  });
});

router.get('/dashboard', function(req, res, next) {
  res.status(200).render('dashboard', {
    title: "Task list",
    desc: "Task list"
  });
});


router.get('/imageprocess', function(req, res, next) {
  res.status(200).render('imageprocess', {
    title: "Task list",
    desc: "Task list"
  });
});

module.exports = router;
