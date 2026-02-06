// Auto-generated file

// === QUESTION: remove duplicates from array ===
const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = nums.reduce((acc, num) => {
    if (!acc.includes(num)) acc.push(num);
    return acc;
}, []);
console.log(uniqueNums);

