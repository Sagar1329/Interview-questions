// Auto-generated from transformations.js

function firstUniqueChar(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return Object.keys(count).find(key => count[key] === 1);
}
console.log(firstUniqueChar("aabbcdde"));


