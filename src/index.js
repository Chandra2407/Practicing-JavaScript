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
let text3 = "<ul><li>ad</li><li>da</li></ul>";
document.getElementById("demo3").innerHTML = text3;
console.log(b.join("-"));
const c = a.split(" ");
console.log(c);
console.log(b.pop());
console.log(b);
console.log(b.push("gay"));
console.log(b.unshift("-_-"));
// array.splice(2,2,"dad","adad"); Splice  Method
console.log(b.concat(c));
const arr1 = [5, 10, 2, 3];
console.log(arr1.sort());
const arr2 = arr1.reverse();
console.log(arr2);
const arr3 = [1, 10, 5, 3, 20, 15];
console.log(arr3);
const arr4 = arr3.sort(function (a, b) {
  return a - b;
});
console.log(arr4);
console.log(Math.max.apply(null, arr4));
const arr5 = [24, 3, 10, 100];
let len = arr5.length;
let max = -Infinity;
for (let i = 0; i < len; i++) {
  if (arr5[i] > max) {
    max = arr5[i];
  }
}
console.log(max);
