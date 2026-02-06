// Auto-generated from questions.js

// === QUESTION: get names of users above 25 using reduce ===
const namesAbove25 = users.reduce((acc, user) => {
    if (user.age > 25) acc.push(user.name);
    return acc;
}, []);
console.log(namesAbove25);

