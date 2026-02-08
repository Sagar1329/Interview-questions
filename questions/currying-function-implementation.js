// Auto-generated from transformations.js

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

