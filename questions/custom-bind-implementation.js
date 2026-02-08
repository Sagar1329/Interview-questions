// Auto-generated from transformations.js

Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

function greet(city) {
    return `Hello ${this.name} from ${city}`;
}

const boundGreet = greet.myBind({ name: "Alice" }, "Bangalore");
console.log(boundGreet());

