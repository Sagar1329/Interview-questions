// Auto-generated from transformations.js

function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([1, 4, 2, 4, 5]));


