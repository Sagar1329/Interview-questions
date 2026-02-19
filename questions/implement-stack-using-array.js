// Auto-generated from transformations.js

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


