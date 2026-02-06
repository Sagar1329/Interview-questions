// Auto-generated from questions.js

// === QUESTION: flatten nested array ===
const flatArray = [1, [2, 3], [4, [5]]];
function flattenArray(array) {
    return array.reduce(
        (acc, cur) =>
            Array.isArray(cur) ? acc.concat(flattenArray(cur)) : acc.concat(cur),
        []
    );
}
console.log(flattenArray(flatArray));

