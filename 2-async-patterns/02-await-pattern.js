const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');

    await writeFile('./content/result-aysnc-await.txt', `THIS IS AWESOME : ${first} and and and ${second}`);
  }
  catch(err) {
    console.log(err);
  }
};

start();


    // const getText = (path) => {
    //   return new Promise((resolve, reject) => {
    //     readFile(path, 'utf-8', (err, data) => {
    //       if (err) {
    //         reject(err);
    //       }
    //       else {
    //         resolve(data);
    //       }
    //     });
    //   });
    // };
    // above is the promisify version of the readFile function of 'fs' module.
    
    // getText('./content/first.txt')
    //   .then((data) => {console.log(data);})
    //   .catch((err) => {console.log(err);});