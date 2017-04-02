var express = require("express");
var moment = require("moment");
var app = express()

function parsetime(time) {
  
  // Parse time as ISO
  return moment.unix(time).format("MMMM D, YYYY");
  
}

function unixtime(time) {
  // Parse time as unix time
  return moment(time, "MMMM D, YYYY").format("X");
}

app.get('/', function(req, res) {
    res.send('Input your date query');
})

app.get('/:query', function (req, res) {
  var unix = null;
  var natural = null;
  var date = req.params.query;
  
  if(+date >= 0){
    unix = +date;
    natural = parsetime(unix);
  }
  
  if(isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()){
    unix = +unixtime(date);
    natural = parsetime(unix);
  }
  
  var rs = {"unix": unix, "natural": natural};
  res.send(rs);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})