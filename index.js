/*
Lots and lots of testytest

 */
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200); //Status code in header
    response.write("more and more testing"); //Response body
    response.end(); //Close the connection
}).listen(8080); //Port in which node will listen for connections
console.log('Listening on port 8080...');


