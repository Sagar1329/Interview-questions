// Auto-generated from transformations.js

function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}
const addOne = x => x + 1;
const double = x => x * 2;
console.log(compose(double, addOne)(5));


