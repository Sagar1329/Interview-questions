// Auto-generated from transformations.js

function flattenDepth(arr, depth = 1) {
  return depth > 0
    ? arr.reduce((acc, val) =>
      acc.concat(Array.isArray(val) ? flattenDepth(val, depth - 1) : val),
      [])
    : arr.slice();
}
console.log(flattenDepth([1, [2, [3]]], 1));


