// Auto-generated from transformations.js

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

