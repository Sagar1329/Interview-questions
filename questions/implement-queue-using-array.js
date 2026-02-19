// Auto-generated from transformations.js

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
}
const queue = new Queue();
queue.enqueue(1);
console.log(queue.dequeue());


