// Auto-generated from transformations.js

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(200).then(() => console.log("Done"));


