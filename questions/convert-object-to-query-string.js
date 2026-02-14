// Auto-generated from transformations.js

function toQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}
console.log(toQueryString({a:1,b:2}));


