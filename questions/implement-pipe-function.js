// Auto-generated from transformations.js

function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}
console.log(pipe(addOne, double)(5));


