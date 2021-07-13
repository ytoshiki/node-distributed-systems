const fs = require("fs");


// Event Loop Phases
// Poll -> Check -> Close -> Timers -> Pending 

// Microtask queues 
// process.nextTick() and Promise that reject or resolve.

// Excecution Order
// Microtask -> Event Loop 



// check phrase
setImmediate(() => 
  console.log(1)
);

// microtask 2
Promise.resolve().then(() => console.log(2));

// microtask 1
process.nextTick(() => console.log(3));

// timers phase 
setTimeout(() => { 
  console.log(9)
}, 1000);

// poll phase
fs.readFile(__filename, () => {
  console.log(4);

  // timers phase
  setTimeout(() => {
    console.log(5);
  })


  // check phase
  setImmediate(() => {
    console.log(6)
  })

  // microtask 
  process.nextTick(() => console.log(7))
})


console.log(8);