
//Assignment #1
/*console.log('The code has started.');

setTimeout(() => {
    console.log('Hey! I waited 3 seconds.');
  }, 3000);

console.log('This is the last statement in the file.');*/



//Assignment #2
/*console.log('The code has started.');
const duration =   Math.floor(Math.random() * 5000);
setTimeout(() => {
  console.log(`Hey! I waited ${duration} milliseconds.`);
}, duration);
console.log('This is the last statement in the file.');*/



//Assignment #3
/*function doTask(name) {
    console.log(`${name} has started`);
    const duration =   Math.floor(Math.random() * 5000);
    setTimeout(() => {
      console.log(`${name} has ended after ${duration} milliseconds`);
    }, duration);
}
  
doTask('A');
doTask('B');
doTask('C');
doTask('D');
doTask('E');*/


//Assignment #4 - Pending promise
/*function doTask(name) {
    const p = new Promise((resolve, reject) => {
      console.log(`${name} has started`);
      const duration =   Math.floor(Math.random() * 5000);
      console.log("duration: " + duration);
      setTimeout(() => {
        resolve(`${name} has ended after ${duration} milliseconds`);
      }, duration);
    });
    return p;
  }

const p2 = doTask('A');
console.log(p2);*/


//Assignment #5 - Refactor
function doTask(name) {
    const p = new Promise((resolve, reject) => {
      console.log(`${name} has started`);
      const duration =   Math.floor(Math.random() * 5000);
      console.log("duration: " + duration);
      setTimeout(() => {
        resolve(`${name} has ended after ${duration} milliseconds`);
      }, duration);
    });
    return p;
}

doTask('A')
  .then(result => {
    console.log(result);
  });

doTask('B')
  .then(result => {
    console.log(result);
 });

doTask('C')
  .then(result => {
    console.log(result);
  });

doTask('D')
  .then(result => {
    console.log(result);
  });

doTask('E')
  .then(result => {
    console.log(result);
  });

doTask('F')
  .then(result => {
    console.log(result);
  });

