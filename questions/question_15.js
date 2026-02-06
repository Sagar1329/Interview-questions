// Auto-generated file

// === QUESTION: group user names by age ===
const userNamesByAge = usersByAgeInput.reduce((acc, user) => {
    if (!acc[user.age]) acc[user.age] = [];
    acc[user.age].push(user.name);
    return acc;
}, {});
console.log(userNamesByAge);

