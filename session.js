var express = require('express');
var router = express.Router();

//create session user
router.get('/set/:name/:email', function (req, res) {
    req.session.user = {name: req.params.name, email: req.params.email};
    res.send('session written to Redis successfully: ' + JSON.stringify(req.session.user));
});

//get session user
router.get('/get/', function (req, res) {
    if (req.session.user) {
        res.send('Session value stored in Redis: ' + JSON.stringify(req.session.user));
    } else {
        res.send('No session value stored in Redis');
    }
});

module.exports = router;