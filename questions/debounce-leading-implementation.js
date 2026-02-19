// Auto-generated from transformations.js

function debounceLeading(fn, delay) {
  let timer;
  return function (...args) {
    if (!timer) fn.apply(this, args);
    clearTimeout(timer);
    timer = setTimeout(() => timer = null, delay);
  };
}


