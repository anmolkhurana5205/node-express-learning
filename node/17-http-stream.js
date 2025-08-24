const http = require('http');
const fs = require('fs');
const { fileURLToPath } = require('url');

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf8');
  // res.end(text);

// there may be a question that if 'res' which is http response object is a writable stream then why in the above snippet it sends whole data in one go and not in chunks? this is because here we are not using the 'res' stream in a streaming way like we didn't create a readable stream instead what we do we reads the whole file in memory as a single string then sends it in one go. 

  const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
  fileStream.on('open',  () => {
    fileStream.pipe(res);
  });

// the event "open" is triggered once while the file is succesfully opened by the stream it gives the file discriptor in the callback's arguement. It is generally used for debugging or ensuring that the file is opened.

  fileStream.on('error', (err) => {
    res.end(err);
    console.log(err);
  });
});

server.listen(5000);

  // here fileStream is readable stream and res is writable stream.