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


// === QUESTION: implement once function ===
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const initialize = once(() => "Initialized");
console.log(initialize());
console.log(initialize());


// === QUESTION: find intersection of two arrays ===
function intersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
console.log(intersection([1,2,3], [2,3,4]));


// === QUESTION: find difference between two arrays ===
function difference(arr1, arr2) {
  return arr1.filter(value => !arr2.includes(value));
}
console.log(difference([1,2,3], [2,3]));


// === QUESTION: chunk array into smaller arrays ===
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1,2,3,4,5], 2));


// === QUESTION: reverse words in a sentence ===
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("hello world javascript"));


// === QUESTION: check palindrome string ===
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));


// === QUESTION: find longest word in sentence ===
function longestWord(sentence) {
  return sentence.split(" ").reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
}
console.log(longestWord("learn javascript deeply"));


// === QUESTION: remove falsy values from array ===
function compact(arr) {
  return arr.filter(Boolean);
}
console.log(compact([0, 1, false, 2, "", 3]));


// === QUESTION: implement sleep function using promise ===
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(200).then(() => console.log("Done"));


// === QUESTION: find first non repeating character ===
function firstUniqueChar(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return Object.keys(count).find(key => count[key] === 1);
}
console.log(firstUniqueChar("aabbcdde"));


// === QUESTION: implement compose function ===
function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}
const addOne = x => x + 1;
const double = x => x * 2;
console.log(compose(double, addOne)(5));


// === QUESTION: implement pipe function ===
function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}
console.log(pipe(addOne, double)(5));


// === QUESTION: find missing number in sequence ===
function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}
console.log(findMissing([1,2,4,5]));


// === QUESTION: convert array to frequency map ===
function frequencyMap(arr) {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}
console.log(frequencyMap(["a","b","a"]));


// === QUESTION: sort array of objects by key ===
function sortByKey(arr, key) {
  return [...arr].sort((a, b) => a[key] > b[key] ? 1 : -1);
}
console.log(sortByKey([{a:2},{a:1}], "a"));


// === QUESTION: merge two objects deeply ===
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


// === QUESTION: generate random string ===
function randomString(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({length}, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}
console.log(randomString(5));


// === QUESTION: check if object is empty ===
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));


// === QUESTION: convert object to query string ===
function toQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}
console.log(toQueryString({a:1,b:2}));


// === QUESTION: flatten object keys ===
function flattenObject(obj, parent = "", res = {}) {
  for (let key in obj) {
    const newKey = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
}
console.log(flattenObject({a:{b:1}}));


// === QUESTION: retry promise function ===
async function retry(fn, retries = 3) {
  try {
    return await fn();
  } catch (err) {
    if (retries === 0) throw err;
    return retry(fn, retries - 1);
  }
}


// === QUESTION: implement event emitter ===
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    (this.events[event] = this.events[event] || []).push(listener);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(listener => listener(data));
  }
}

const emitter = new EventEmitter();
emitter.on("test", msg => console.log(msg));
emitter.emit("test", "Hello");


// === QUESTION: calculate factorial recursively ===
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));


// === QUESTION: find duplicates in array ===
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (let item of arr) {
    if (seen.has(item)) duplicates.add(item);
    else seen.add(item);
  }
  return [...duplicates];
}
console.log(findDuplicates([1,2,2,3,3,4]));



// === QUESTION: implement binary search ===
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 4));


// === QUESTION: implement quick sort ===
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.slice(0, -1).filter(x => x < pivot);
  const right = arr.slice(0, -1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([5, 3, 8, 1]));


// === QUESTION: implement merge sort ===
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
}
console.log(mergeSort([5, 2, 9, 1]));


// === QUESTION: implement stack using array ===
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}
const stack = new Stack();
stack.push(1);
console.log(stack.pop());


// === QUESTION: implement queue using array ===
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
}
const queue = new Queue();
queue.enqueue(1);
console.log(queue.dequeue());


// === QUESTION: find second largest number ===
function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([1, 4, 2, 4, 5]));


// === QUESTION: check if array is sorted ===
function isSorted(arr) {
  return arr.every((val, i) => i === 0 || arr[i - 1] <= val);
}
console.log(isSorted([1, 2, 3]));


// === QUESTION: implement flatten depth limited ===
function flattenDepth(arr, depth = 1) {
  return depth > 0
    ? arr.reduce((acc, val) =>
      acc.concat(Array.isArray(val) ? flattenDepth(val, depth - 1) : val),
      [])
    : arr.slice();
}
console.log(flattenDepth([1, [2, [3]]], 1));


// === QUESTION: implement custom map function ===
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
console.log([1, 2, 3].myMap(x => x * 2));


// === QUESTION: implement custom filter function ===
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};
console.log([1, 2, 3, 4].myFilter(x => x % 2 === 0));


// === QUESTION: implement custom reduce function ===
Array.prototype.myReduce = function (callback, initial) {
  let acc = initial ?? this[0];
  let start = initial !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
console.log([1, 2, 3].myReduce((a, b) => a + b, 0));


// === QUESTION: find majority element in array ===
function majorityElement(arr) {
  let count = 0, candidate;
  for (let num of arr) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
console.log(majorityElement([3, 3, 4]));


// === QUESTION: rotate array k times ===
function rotateArray(arr, k) {
  k %= arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));


// === QUESTION: find maximum subarray sum ===
function maxSubArray(arr) {
  let max = arr[0], current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    max = Math.max(max, current);
  }
  return max;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// === QUESTION: check anagram strings ===
function isAnagram(str1, str2) {
  const format = str => str.split("").sort().join("");
  return format(str1) === format(str2);
}
console.log(isAnagram("listen", "silent"));


// === QUESTION: generate fibonacci sequence ===
function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}
console.log(fibonacci(6));


// === QUESTION: remove element from array in place ===
function removeElement(arr, val) {
  return arr.filter(x => x !== val);
}
console.log(removeElement([1, 2, 3, 2], 2));


// === QUESTION: find longest substring without repeating characters ===
function longestSubstring(str) {
  let set = new Set(), left = 0, max = 0;
  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left++]);
    }
    set.add(str[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}
console.log(longestSubstring("abcabcbb"));


// === QUESTION: implement lru cache ===
class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    if (this.cache.size === this.limit) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1));


// === QUESTION: implement promise race ===
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(p =>
      Promise.resolve(p).then(resolve).catch(reject)
    );
  });
}
promiseRace([Promise.resolve("fast")]).then(console.log);


// === QUESTION: debounce leading implementation ===
function debounceLeading(fn, delay) {
  let timer;
  return function (...args) {
    if (!timer) fn.apply(this, args);
    clearTimeout(timer);
    timer = setTimeout(() => timer = null, delay);
  };
}


// === QUESTION: find kth largest element ===
function kthLargest(arr, k) {
  return arr.sort((a, b) => b - a)[k - 1];
}
console.log(kthLargest([3, 2, 1, 5, 6, 4], 2));


// === QUESTION: deep freeze object ===
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null && typeof obj[prop] === "object") {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
}
console.log(deepFreeze({ a: { b: 2 } }));


// === QUESTION: implement simple router matcher ===
function matchRoute(routes, path) {
  return routes.find(route => route === path) || null;
}
console.log(matchRoute(["/home", "/about"], "/about"));
