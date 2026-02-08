// Auto-generated from transformations.js

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const debouncedLog = debounce(msg => console.log(msg), 300);
debouncedLog("Hello");

