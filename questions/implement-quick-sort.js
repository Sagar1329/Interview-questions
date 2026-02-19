// Auto-generated from transformations.js

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.slice(0, -1).filter(x => x < pivot);
  const right = arr.slice(0, -1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([5, 3, 8, 1]));


