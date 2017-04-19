var http = require('http'); //get a module
var random = require ('./random');
var output = require ('./output');
var convert = require ('./convert');

http.createServer(function (req, res) {
  res.writeHead(200); //HEAD -- response OK
  res.write ('Account Balance: \n');
  res.write('$' + convert());
  res.end();

}).listen(3000);
