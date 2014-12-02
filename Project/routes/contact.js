/**
 * Created by KHUSHI on 11/25/2014.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('contact', { title: 'Express' });
});

module.exports = router;
