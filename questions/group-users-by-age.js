// Auto-generated from questions.js

// === QUESTION: group users by age ===
const usersByAgeInput = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
];

const usersByAge = usersByAgeInput.reduce((acc, user) => {
    if (!acc[user.age]) acc[user.age] = [];
    acc[user.age].push(user);
    return acc;
}, {});
console.log(usersByAge);

