// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEvent.on('response', (name, roll) => {
  console.log(`data received btw my name is ${name} and roll is ${roll}`);
});
customEvent.on('response', () => {
  console.log(`some other logic here`);
});

customEvent.emit('response', 'anmol', 54);