const {createReadStream} = require('fs');

// default 64kb chunk.
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
// here stream is a readable stream means we can read data from it.

const stream = createReadStream('./content/big.txt', {
  highWaterMark : 90000, 
  // encoding: 'utf-8'
});
stream.on('data', (result) => {
  console.log(result);
});

// here "data" event triggered multiple times whenever the chunk of data is read from the file and gives actual chunk of data in arguement of the callback.

stream.on('error', (err) => {
  console.log(err);
});
// here "error" event triggered when something goes wrong.