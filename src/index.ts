import dotenv from "dotenv";
import http from "http";
dotenv.config();

const port = process.env.PORT || 3000;

console.log(1);
http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(port); //the server object listens on port 8080