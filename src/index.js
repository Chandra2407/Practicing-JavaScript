console.log("Hello");
let x = 10;
var z = x + 5;
console.log(z);
{
  let x = 20;
  console.log(x);
}
console.log(x);
// arrays and constants
const cars = ["abc", "xyz"];
cars[0] = "lmn";
cars.push("jk");
console.log(cars);

// objects and constants

const bikes = { type: "2wheels", owner: "x" };
console.log(bikes);
bikes.owner = "y";
bikes.color = "black";
console.log(bikes);
console.log(typeof bikes);

// functions

function func() {
  return x;
}
console.log(func());
let text = "a book";

// String

console.log(text.replace("book", "boy"));
console.log(text);
console.log(text.slice(0, 2));
console.log(text);
let a = "a man is a dog";
const b = a.split(" ");
console.log(b);
console.log(b[0]);
console.log(a.indexOf("a"));
console.log(a.search("dog"));
console.log(a.match(/a/gi));

console.log(typeof NaN);
