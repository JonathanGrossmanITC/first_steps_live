console.log("from the index file");

console.log(document);

// Variables

// Variables require keywords: const, let, or var
// const pageTitle = "Welcome to class";
// console.log(pageTitle);

let somethingElse = "Israel Tech Challenge";
// console.log(subtitle);

somethingElse = "ITC";
// console.log(subtitle);

var otherSubtitle = "Israel";

// console.log(document.getElementById("pageTitle"));

const pageTitle = document.getElementById("pageTitle");

console.log(pageTitle.innerHTML);

pageTitle.innerHTML = "Good questions, guys.";

console.log(pageTitle.innerHTML);

pageTitle.classList.add("subtitle");
pageTitle.classList.remove("title");

// console.log(pageTitle.id);
// console.log(pageTitle.classList);

// Data Types
// strings - a collection of characters inside quotes
const exampleString = "hello there";
console.log(exampleString.length);
console.log(exampleString.toUpperCase());
console.log(exampleString);

const text1 = "Hello";
const text2 = "World";
const text3 = text1.concat(" ", text2);
console.log(text3);

const text4 = text1 + " " + text2;
console.log(text4);

// numbers (integers and floats)
const exampleInt = 56;
const exampleFloat = 56.0;

console.log(exampleInt);

const x = "10";
const y = "20";
const z = x + y;
console.log(z);

const a = 10;
const b = 20;
const c = a - b;
console.log(c);

// Boolean (true or false)

const True = "hi there";

("True");
("true");

true;
false;
console.log(true);

if (a === b) {
  console.log("they're equal!");
} else {
  console.log("they're NOT equal");
}

// array

const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars.length);

const fruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Banana",
  "Orange",
  "Apple",
  "Mango",
];

fruits.length - 1;

// console.log(fruits.sort().reverse()); // Sorts the elements of fruits
console.log(fruits[2]);
// console.log("Brown".split("").sort().join(" - "));

const numberCars = [8, 1000, 80, 64];
// console.log(numberCars.sort());

const mixedArray = ["Saab", 76, ["Volvo", "BMW"]];

// object
