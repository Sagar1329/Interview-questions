// Auto-generated from transformations.js

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    (this.events[event] = this.events[event] || []).push(listener);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(listener => listener(data));
  }
}

const emitter = new EventEmitter();
emitter.on("test", msg => console.log(msg));
emitter.emit("test", "Hello");


