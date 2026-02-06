// Auto-generated file

// === QUESTION: convert array of objects to object by id ===
const usersDef = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const usersById = usersDef.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
}, {});
console.log(usersById);

