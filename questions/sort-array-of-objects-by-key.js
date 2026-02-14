// Auto-generated from transformations.js

function sortByKey(arr, key) {
  return [...arr].sort((a, b) => a[key] > b[key] ? 1 : -1);
}
console.log(sortByKey([{a:2},{a:1}], "a"));


