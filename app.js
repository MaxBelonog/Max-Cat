var express = require('express');
var bodyParser = require('body-parser')
var app = express();


app.use(express.static('public'))
app.use(bodyParser.json())
app.get('/', function (request, response) {
  response.render('index');
app.get('/', (req, res) => {
  res.json({message: 'API Example App'})
app.get('/', function (request, response) {
  response.render('index', {'questions': questions});
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');

module.exports = app
