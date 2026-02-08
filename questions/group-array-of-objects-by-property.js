// Auto-generated from transformations.js

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

