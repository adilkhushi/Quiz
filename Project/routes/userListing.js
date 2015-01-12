var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    var users=req.app.db.collection("users");
    users.find().toArray(function(err, results) {
        // console.dir(results);
        res.render('userListing', { users: results });
    });

    //res.render('test1', { title: 'Results' });
});

module.exports = router;
