var express = require('express');
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var app = express();

app.use(bodyParser.urlencoded())
app.use('/', express.static(__dirname + '/client'));


app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});