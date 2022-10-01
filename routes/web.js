var express = require('express');
var router = express.Router();
const Account = require('../models/Test');
const User = require('../models/User');
router.get('/test', function (req, res, next) {
    Test.findAll().then((data) => {
        res.render('accounts.ejs', { title: data[0].name });
    })

});
// router.get('/test/:id', function (req, res, next) {

//     Test.findOne({ where: { id: req.params.id } }).then((data) => {
//         res.render('accounts.ejs', { title: data.name });
//     })

// });

router.get('/accounts', function (req, res, next) {
    Account.findAll().then((data) => {
        res.render('accounts.ejs', { data });
    })
});
router.post('/details', function (req, res, next) {
    if (req.body.user_name) {
        Account.findOne({ where: { id: req.body.user_name } }).then((data) => {
            res.render('show.ejs', { user: data });
        })
    } else {
        Account.findAll().then((data) => {
            res.render('accounts.ejs', { data });

        })
    }
});


module.exports = router;