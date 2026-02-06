// Auto-generated file

// === QUESTION: find user with max age ===
const users2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
];

const maxAgeUser = users2.reduce((max, user) =>
    user.age > max.age ? user : max
);
console.log(maxAgeUser);

