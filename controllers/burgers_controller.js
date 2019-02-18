var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (burger_data) {
        console.log(burger_data);
    res.render('index',{burger_data});
    })
})

router.post('/burgers_update/:burger_id', function(req,res){
    burger.updateOne(req.params.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/insertOne', function(req,res){
    burger.insertOne(req.body.burger_name, function(result){
        res.redirect('/');
    })
})
module.exports = router;