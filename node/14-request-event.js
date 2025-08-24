const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('welcome');
});

/*the above thing is same as 
const server = http.createServer((req, res) => {
  res.end('welcome');
}
this is short hand code for the uncommented code, as it done behind the scene or under the hood.
this is just to showcase that how the built in modules rely heavily on events.
*/

server.listen(5000);