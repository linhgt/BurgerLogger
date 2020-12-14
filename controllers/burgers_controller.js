//Handle the controller, implementing the routes
var express = require("express");

//Create modular, mountable express router that can be exported
var route = express.Router();

var burger = require("../models/burger.js");

route.get("/", function(req, res){
    burger.selectAll(function(data){
        var obj = {
            burgers: data
        };
        console.log(obj);
        res.render("index", obj);
    });
});

module.exports = route;