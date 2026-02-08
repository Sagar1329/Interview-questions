// Auto-generated from transformations.js

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

