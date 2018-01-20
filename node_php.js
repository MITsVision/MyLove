// Using require() in ES5
var FB = require('fb');
var fs = require("fs");

//enabling server
const http = require('http');
http.createServer(function(request, response) {
    fs.readFile("fbapi1.html", function(err, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
      });
}).listen(3000);

