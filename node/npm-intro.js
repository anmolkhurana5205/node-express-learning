// npm - this is a global command comes with the node.
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install —g <packageName>
// sudo install -g <packageName> (for mac)

// package.json - stores important info. about the project.
// can be created manually
// automatic way 1. npm init (questionaire)
// automatic way 2. npm init -y (set everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world');