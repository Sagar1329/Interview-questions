// Auto-generated from transformations.js

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

