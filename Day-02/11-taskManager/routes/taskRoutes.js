var express = require('express');
var router = express.Router();

var taskStore = [
    {id : 1, name : 'Fix the bug', isCompleted : false},
    {id : 2, name : 'Master JavaScript', isCompleted : false},
    {id : 3, name : 'Watch Bahubali', isCompleted : true}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tasks/index', {title : 'Task Organizer', list : taskStore});
});

router.get('/new', function(req, res, next){
    res.render('tasks/new', {title : 'New Task'});
});

module.exports = router;
