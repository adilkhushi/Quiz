var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    sess = req.session;
    if(sess.userId)
    {
        res.render('index', { loginStatus: 1 });
    }
    else{
        res.render('index', { loginStatus: 0 });
    }
res.end;
  //res.render('index', { title: 'Express' });
});

module.exports = router;
