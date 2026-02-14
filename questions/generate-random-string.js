// Auto-generated from transformations.js

function randomString(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({length}, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}
console.log(randomString(5));


