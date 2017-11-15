var http = require("http");
var PORT = 7000;
var PORT2 = 7500

  function handleRequest(request,response) {
    response.end("You're Beautiful "  + request.url);
  }
  var server= http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);


});


function handleRequest2(request,response) {
  response.end("You're a bit loud! "  + request.url);
}
var server= http.createServer(handleRequest2);

server.listen(PORT2, function(){
console.log("Server listening on: http://localhost:%s", PORT2);


});
