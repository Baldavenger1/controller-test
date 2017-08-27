/* 
	Robot Controller Webserver Basics
	David Simpson - Thesis project
*/
var url = require('url');
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'}); //Status code in header
	response.write("speed and turn are: ")
    var q = url.parse(request.url,true).query;
	var txt = q.speed + " " + q.turn;
    response.end(txt); //Close the connection
}).listen(8080); //Port in which node will listen for connections

console.log('Listening on port 8080...');

/* Run the following cmd to start node and run the server
 node '01 - Introduction.js'
 */

/* Run the following cmd to make an HTTP request to your local server (you should get a response)
 curl http://localhost:8080
 */