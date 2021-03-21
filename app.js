var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    moment = require("moment")

    
const port = process.env.PORT || 3000

moment.locale("en-gb");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.locals.moment = moment;

app.listen(port, function() {
    console.log("Server has started on port: " + port)
})


app.get("/", function(req, res) {
    res.render("landing");
});