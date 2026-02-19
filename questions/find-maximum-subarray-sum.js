// Auto-generated from transformations.js

function maxSubArray(arr) {
  let max = arr[0], current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    max = Math.max(max, current);
  }
  return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


