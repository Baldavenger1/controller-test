/*
Lots and lots of testytest

 */



var bbb = require('request');
var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
	var headers = request.headers;
	var q = url.parse(request.url, true).query;
	//console.log(headers);
	console.log(request.url);
    response.writeHead(200); //Status code in header
    response.write("more and more testing"); //Response body
    response.end(); //Close the connection
}).listen(8080); //Port in which node will listen for connections
console.log('Listening on port 8080...');


bbb('http://14.202.147.3:8888', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the homepage. 
});
