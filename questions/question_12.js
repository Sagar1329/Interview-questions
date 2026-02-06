// Auto-generated file

// === QUESTION: count occurrence of elements ===
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount);

