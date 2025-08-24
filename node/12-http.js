const http = require('http');

// after learning streams we now know that 'res' which is http response object (not specific name we can give any name to it i am using this name here because it is general) is a writable stream, and 'req' is a readable stream.

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('welcome to our home page');
  }
  else if(req.url === '/about') {
    res.end('this is out about page');
  }
  else {
    res.end(`
      <h1>Error</h1>
      <p>We can't seem to find the page you are looking for sorry for the problem...</p>
      <a href = "/">back home</a>
      `);
  }
});

server.listen(5000);