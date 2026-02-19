// Auto-generated from transformations.js

function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null && typeof obj[prop] === "object") {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
}
console.log(deepFreeze({ a: { b: 2 } }));


