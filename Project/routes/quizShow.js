var express = require('express');
var router = express.Router();
var assert=require("assert");

/* GET home page. */
router.get('/', function(req, res) {

  //  var quiz=req.app.db.collection("quiz");

        var collection = req.app.db.collection("quiz");
        var cursor = collection.find({});
        console.log(cursor);
        cursor.nextObject(function(err, item) {
          //  assert.equal(0, item.a)
            // Rewind the cursor, resetting it to point to the start of the query
            cursor.rewind();
        });

        res.render('quizShow', { title: 'Express' });


  //  console.log(quiz);

});

module.exports = router;
