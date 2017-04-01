var express = require("express");
var app = express()

function parsetime(time) {
  // Parse time as ISO
  return {
    hour: time.getHours(),  
    minute: time.getMinutes(),  
    second: time.getSeconds()
  };
}

function unixtime(time) {
  // Parse time as unix time
  return {
    unixtime : time.getTime()
  };
}

app.get('/:query', function (req, res) {
  var unix = null;
  var natural = null;
  var rs = {"unix": unix, "natural": natural};
  res.send(rs);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})