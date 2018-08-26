var path = require("path");
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'app/public')));

app.get('/', function(req, res){
  res.send('hello world');
});

var server = app.listen(3000, function() {
  console.log('Server running on ', server.address())
})