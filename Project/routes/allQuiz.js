var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    questions = req.app.db.collection("quiz");
    questions.find({Quiz:"John"}).toArray(function(err, results) {
        // console.dir(results);
        res.render('allQuiz', { questions: results });
    });
});


module.exports = router;