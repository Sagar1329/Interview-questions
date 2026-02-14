// Auto-generated from transformations.js

function frequencyMap(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}
console.log(frequencyMap(["a","b","a"]));


