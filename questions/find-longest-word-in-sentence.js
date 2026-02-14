// Auto-generated from transformations.js

function longestWord(sentence) {
  return sentence.split(" ").reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}
console.log(longestWord("learn javascript deeply"));


