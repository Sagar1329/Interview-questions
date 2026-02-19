// Auto-generated from transformations.js

function majorityElement(arr) {
  let count = 0, candidate;
  for (let num of arr) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
console.log(majorityElement([3, 3, 4]));


