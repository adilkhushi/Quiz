var express = require('express');
var router = express.Router();
var assert=require("assert");

/* GET home page. */
router.get('/', function(req, res) {

  //  var quiz=req.app.db.collection("quiz");

        var collection = req.app.db.collection("quiz");
    collection.find().toArray(function(err, results) {
        // console.dir(results);
        res.render('quizShow', { quizList: results });
    });


  //  console.log(quiz);

});

module.exports = router;
