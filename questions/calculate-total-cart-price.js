// Auto-generated from questions.js

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

