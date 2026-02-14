// Auto-generated from transformations.js

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (let item of arr) {
    if (seen.has(item)) duplicates.add(item);
    else seen.add(item);
  }
  return [...duplicates];
}
console.log(findDuplicates([1,2,2,3,3,4]));
