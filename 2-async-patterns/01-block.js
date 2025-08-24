const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.end('Home Page');
    console.log('loaded the home page');
  }
  else if (req.url === '/about') {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About Page');
  }
  else if (req.url === '/favicon.ico') {
    res.end();
  }
  else {
    res.end('Error Page');
    console.log('loaded the unexisted page');
  }
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....');
})