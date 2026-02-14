// Auto-generated from transformations.js

function deepMerge(obj1, obj2) {
  const result = {...obj1};
  for (let key in obj2) {
    if (typeof obj2[key] === "object" && obj2[key] !== null) {
      result[key] = deepMerge(result[key] || {}, obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}
console.log(deepMerge({a:1,b:{c:2}}, {b:{d:3}}));


