const arr = [2, 5, 8, 2, 43];
const res = arr.map((num) => {
    return num * 2;
})
console.log(res);
console.log("-------------------------------------");

const evenNumber = arr.filter((num) => {
    return num % 2 == 0;
})
console.log(evenNumber);
console.log("-------------------------------------");

const sumArr = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0)
console.log(sumArr);
console.log("-------------------------------------");

const flatArray = [1, [2, 3], [4, [5]]];

function flattenArray(arr) {
    return arr.reduce((acc, cur) => {
        return Array.isArray(cur) ? acc.concat(flattenArray(cur)) : acc.concat(cur);
    }, [])
}
console.log(flattenArray(flatArray));
console.log("-------------------------------------");

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
];

const names = users.map((user) => {
    return user.name;
})

console.log(names);
console.log("-------------------------------------");

const ageAbove25 = users.filter((user) => {
    return user.age > 25;
})

console.log(ageAbove25);
console.log("-------------------------------------");

const totalAge = users.reduce((acc, cur) => {
    return acc + cur.age;
}, 0)
console.log(totalAge);

// convert array of objects to object with id as key
const usersDef = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];


const convertToObjId = usersDef.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
}, {})


console.log(convertToObjId);
console.log("-------------------------------------");

// const userGreaterThan25 = users.filter((user) => {

//     return user.age > 25;
// }).map((user) => {
//     return user.name;
// })
const userGreaterThan25 = users.reduce((acc, curr) => {

    if (curr.age > 25) {
        acc.push(curr.name);
    }
    return acc;
}, [])

console.log("Reduced method", userGreaterThan25);
console.log("-------------------------------------");

const cart = [
    { item: "Pen", price: 10, qty: 2 },
    { item: "Book", price: 50, qty: 1 },
];

const totalPriceInCart = cart.reduce((acc, curr) => {
    return acc + (curr.price * curr.qty);
}, 0)
console.log(totalPriceInCart);
console.log("-------------------------------------");

// remove duplicates from array
const nums = [1, 2, 2, 3, 4, 4];
const removeDuplicates = nums.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, [])
console.log(removeDuplicates);
console.log("-------------------------------------");

// count occurence of elements in array
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const countOccurence = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {})

console.log(countOccurence);
console.log("-------------------------------------");

//Convert this object into an array of users:
const userObj = {
    1: { id: 1, name: "Alice" },
    2: { id: 2, name: "Bob" }
};

const convertToArray1 = Object.values(userObj);
console.log(convertToArray1);
console.log("-------------------------------------");

const convertToArray = Object.keys(userObj).map((key) => {
    return userObj[key];
})

console.log(convertToArray);
console.log("-------------------------------------");

// group users by age
const users1 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
];

const groupUsersByAge = users1.reduce((acc, cur) => {
    // acc[cur.age]= acc[cur.age] || [];
    if (!acc[cur.age]) {
        acc[cur.age] = [];
    }
    acc[cur.age].push(cur);
    return acc;
}, {})

const groupUsersByAge2 = users1.reduce((acc, cur) => {
    // acc[cur.age]= acc[cur.age] || [];
    if (!acc[cur.age]) {
        acc[cur.age] = [];
    }
    acc[cur.age].push(cur.name);
    return acc;
}, {})

console.log(groupUsersByAge2);
console.log("Only names-------------------------------------");

// max age user
const users2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
];

const maxAgeUser = users2.reduce((acc, cur) => {
    return (acc.age > cur.age) ? acc : cur;
})
console.log(maxAgeUser);
console.log("-------------------------------------");

//some user below 18 checking
const hasMinor = users2.some((user) => {
    return user.age < 18;
})
console.log(hasMinor);
console.log("-------------------------------------");

const everyUserAdult = users2.every((user) => {
    return user.age >= 18;
})
console.log(everyUserAdult);
console.log("-------------------------------------");

const data = [
    { country: "India", city: "Karnataka" },
    { country: "Pakistan", city: "Karachi" },
    { country: "India", city: "Delhi" },
    { country: "India", city: "Chennai" },
    { country: "India", city: "Hyderabad" },
    { country: "Pakistan", city: "Lahore" }
];

const countryWiseCities = data.reduce((acc, cur) => {
    if (!acc[cur.country]) {
        acc[cur.country] = [];
    }
    acc[cur.country].push(cur.city);
    return acc;
}, {})
console.log("Cont", countryWiseCities);
console.log("-------------------------------------");

// Ternary operator
const countryWiseCities2 = data.reduce((acc, cur) => {
    (!acc[cur.country]) ? acc[cur.country] = [cur.city] : acc[cur.country].push(cur.city);
    return acc;
}, {});
console.log("Cont", countryWiseCities2);
console.log("-------------------------------------");


const sortUserInAscendingOrder = [...users2].sort((a, b) => a.age - b.age);
console.log(sortUserInAscendingOrder);

const newUser = { country: "India", city: "Andhra Pradesh" }

const newData = [newUser, ...data];
console.log(newData);

// Interview Questions:
// 1. Why do we use React?
// 2. Why do we prefer React over others?
// 3. What is a library in React?
// 4. Why do we call Angular a framework and React a library?
// 5. Class based hooks vs function based hooks?
// 6. What is closure?
// 7. Difference between .map() and forEach()let str1 = "Hello";
let str1 = "Hello";
let str2 = "World";
let result1 = str1 + " " + str2;
let result2 = str1.concat(" ", str2);
console.log(result1); // Output: Hello World
console.log(result2); // Output: Hello World


let str = "123";
let num = parseInt(str);
console.log(num); // Output: 123


let a = 4;
let b = "4";
console.log(a == b); // Output: true (type coercion to int)
console.log(a === b); // Output: false (no type coercion)


function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Output: Hello, Alice

let arr3 = [1, 2, 3];
let doubledArr = arr.map(function(num) {
  return num * 2;
});
console.log(doubledArr); // Output: [2, 4, 6]


let arr4 = [1, 2, 3];
let sum = arr.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log(sum); // Output: 6


let obj = { name: "Alice", age: 25 };
let keys = Object.keys(obj);
console.log(keys); // Output: ["name", "age"]









                                                                                                                                                                                                                                                     