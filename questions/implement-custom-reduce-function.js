// Auto-generated from transformations.js

Array.prototype.myReduce = function (callback, initial) {
  let acc = initial ?? this[0];
  let start = initial !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
console.log([1, 2, 3].myReduce((a, b) => a + b, 0));


