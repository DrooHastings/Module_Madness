var http = require('http'); //get a module
var random = require ('./random');
var output = require ('./output');
var convert = require ('./convert');

http.createServer(function (req, res) {
  res.writeHead(200); //HEAD -- response OK
  // res.write(' ' + random(100, 1000));
  res.write ('Account Balance: \n');
  res.write('$' + convert());
  res.end();

}).listen(3000);


// http.createServer(function (req, res) {
//   res.writeHead(200); // HEAD
//   res.write(output.getHeading());
//   res.write(output.sendTitle(data()));
//   res.end();
// }).listen(3000);
