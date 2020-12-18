var express = require('express');
var eshbs = require("express-handlebars");

var app = express();

var PORT =  process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use handlebars
app.engine("handlebars", eshbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//controller Route
var controllerRoute = require("./controllers/burgers_controller.js");

//app.use(controllerRoute);
app.get("/", function(req, res){
    res.send("Hello");
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

