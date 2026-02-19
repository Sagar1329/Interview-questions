// Auto-generated from transformations.js

function isSorted(arr) {
  return arr.every((val, i) => i === 0 || arr[i - 1] <= val);
}
console.log(isSorted([1, 2, 3]));


