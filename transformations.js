// === QUESTION: double array values using map ===
const arr = [2, 5, 8, 2, 43];
const doubled = arr.map(num => num * 2);
console.log(doubled);

// === QUESTION: filter even numbers ===
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);

// === QUESTION: sum array using reduce ===
const sumArr = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArr);

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

// === QUESTION: extract names from users ===
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
];

const userNames = users.map(user => user.name);
console.log(userNames);

// === QUESTION: filter users above age 25 ===
const usersAbove25 = users.filter(user => user.age > 25);
console.log(usersAbove25);

// === QUESTION: calculate total age ===
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge);

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

// === QUESTION: get names of users above 25 using reduce ===
const namesAbove25 = users.reduce((acc, user) => {
    if (user.age > 25) acc.push(user.name);
    return acc;
}, []);
console.log(namesAbove25);

// === QUESTION: calculate total cart price ===
const cart = [
    { item: "Pen", price: 10, qty: 2 },
    { item: "Book", price: 50, qty: 1 },
];

const totalCartPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
);
console.log(totalCartPrice);

// === QUESTION: remove duplicates from array ===
const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = nums.reduce((acc, num) => {
    if (!acc.includes(num)) acc.push(num);
    return acc;
}, []);
console.log(uniqueNums);

// === QUESTION: count occurrence of elements ===
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount);

// === QUESTION: convert object to array ===
const userObj = {
    1: { id: 1, name: "Alice" },
    2: { id: 2, name: "Bob" }
};

console.log(Object.values(userObj));

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

// === QUESTION: group user names by age ===
const userNamesByAge = usersByAgeInput.reduce((acc, user) => {
    if (!acc[user.age]) acc[user.age] = [];
    acc[user.age].push(user.name);
    return acc;
}, {});
console.log(userNamesByAge);

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

// === QUESTION: check if any user is minor ===
const hasMinor = users2.some(user => user.age < 18);
console.log(hasMinor);

// === QUESTION: check if all users are adults ===
const allAdults = users2.every(user => user.age >= 18);
console.log(allAdults);

// === QUESTION: group cities by country ===
const locations = [
    { country: "India", city: "Karnataka" },
    { country: "Pakistan", city: "Karachi" },
    { country: "India", city: "Delhi" },
    { country: "India", city: "Chennai" },
    { country: "India", city: "Hyderabad" },
    { country: "Pakistan", city: "Lahore" }
];

const citiesByCountry = locations.reduce((acc, loc) => {
    if (!acc[loc.country]) acc[loc.country] = [];
    acc[loc.country].push(loc.city);
    return acc;
}, {});
console.log(citiesByCountry);

// === QUESTION: sort users by age ascending ===
const sortedUsers = [...users2].sort((a, b) => a.age - b.age);
console.log(sortedUsers);

// === QUESTION: string concatenation ===
const str1 = "Hello";
const str2 = "World";
console.log(str1 + " " + str2);
console.log(str1.concat(" ", str2));

// === QUESTION: string to number conversion ===
const strNum = "123";
console.log(parseInt(strNum, 10));

// === QUESTION: loose vs strict equality ===
const a = 4;
const b = "4";
console.log(a == b);
console.log(a === b);

// === QUESTION: simple function ===
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alice"));

// === QUESTION: Object.keys usage ===
const obj = { name: "Alice", age: 25 };
console.log(Object.keys(obj));


// === QUESTION: debounce function implementation ===
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const debouncedLog = debounce(msg => console.log(msg), 300);
debouncedLog("Hello");

// === QUESTION: throttle function implementation ===
function throttle(fn, limit) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

const throttledLog = throttle(msg => console.log(msg), 300);
throttledLog("Hello");

// === QUESTION: deep clone an object ===
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);

    const cloned = {};
    for (const key in obj) {
        cloned[key] = deepClone(obj[key]);
    }
    return cloned;
}

const original = { a: 1, b: { c: 2 } };
console.log(deepClone(original));

// === QUESTION: flatten array without recursion ===
function flattenIterative(arr) {
    const stack = [...arr];
    const result = [];

    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.unshift(next);
        }
    }
    return result;
}

console.log(flattenIterative([1, [2, [3, 4]], 5]));

// === QUESTION: implement promise all ===
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) resolve(results);
                })
                .catch(reject);
        });
    });
}

promiseAll([Promise.resolve(1), Promise.resolve(2)]).then(console.log);

// === QUESTION: currying function implementation ===
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return (...nextArgs) => curried(...args, ...nextArgs);
    };
}

function add(a, b, c) {
    return a + b + c;
}

console.log(curry(add)(1)(2)(3));

// === QUESTION: memoization function implementation ===
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        cache[key] = fn.apply(this, args);
        return cache[key];
    };
}

const slowAdd = (a, b) => a + b;
const memoizedAdd = memoize(slowAdd);
console.log(memoizedAdd(2, 3));

// === QUESTION: group array of objects by property ===
function groupBy(arr, key) {
    return arr.reduce((acc, item) => {
        const groupKey = item[key];
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(item);
        return acc;
    }, {});
}

console.log(
    groupBy(
        [
            { type: "fruit", name: "apple" },
            { type: "veg", name: "carrot" },
            { type: "fruit", name: "banana" }
        ],
        "type"
    )
);

// === QUESTION: custom bind implementation ===
Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

function greet(city) {
    return `Hello ${this.name} from ${city}`;
}

const boundGreet = greet.myBind({ name: "Alice" }, "Bangalore");
console.log(boundGreet());

// === QUESTION: check if two objects are deeply equal ===
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null)
        return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    return keysA.every(key => deepEqual(a[key], b[key]));
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
