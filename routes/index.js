var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Programacion 2, 2024-1',
        name: 'Luis Ayala',
        dni: '30703478',
        s: '2'});
});

module.exports = router;
