var express = require('express')

var bodyParser = require('body-parser')

var app = express()




// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app); 

const path = require('path');
 
app.listen(3000)


