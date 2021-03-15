// This is a console.log, which prints to the browser's console
console.log("Hi, I'm the console.log");

("Hi, I'm the console.log");

const helloMessage = "Hi, I'm the console.log";
let goodbyeMessage = "Good bye.";

console.log(helloMessage);
console.log(goodbyeMessage);

console.log(helloMessage + " " + goodbyeMessage);

goodbyeMessage = "See you.";
console.log(goodbyeMessage);

const theOtherHelloMessage = "Hi.";

const title = document.getElementById("title");
console.log(title);
console.log(title.textContent);

console.log("before", title.classList);
title.classList.add("text");
console.log("after", title.classList);

title.classList.remove("title");
console.log("after remove", title.classList);

// You can change the textContent dynamically
// title.textContent = "Hello";
// console.log(title);

// Data types

const aString = "In quotes";

// string vs integer
const alsoString = "9";
const integer = 9;

// float vs. integer
const aFloat = 9.0;
const anInteger = 9;

// boolean vs. everything
const aBoolean = true;
const anotherB = false;
const notABoolean = "false";
// const alsoNotABoolean = False;

// array
const anArray = [
  "pants",
  "shirts",
  "socks",
  9,
  10,
  11,
  true,
  ["hi", "shalom", "hola"],
];

// Using index position with a string
// const txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const last = txt.length - 1;
// console.log(last);
// console.log(txt[last]);

// let sln = txt.length;
// console.log("sln 1", sln);

// const empty = "";
// sln = empty.length;
// console.log("sln 2", sln);

const str = "Please locate where 'locate' occurs!";
const pos = str.search("locate");
console.log(pos);

const text1 = "Hello World!"; // String
const text2 = text1.toUpperCase(); // "HELLO WORLD!
console.log(text2);

//Convert string to number data type
let newNumber = parseInt("999");
console.log(newNumber);

//Convert string to number data type
// newNumber = parseFloat("999.0").toFixed(1);
// console.log(newNumber);
// title.textContent = newNumber;

// const newBoolean = true;
// const newString = "true";
// console.log(typeof newBoolean);
// console.log(typeof newString);

if (newBoolean === true) {
  console.log("dinner is ready");
}

if (10 > 9) {
  console.log(10 > 9);
}

// Using index position with a array
const thisArray = ["one", "two", "three", "four"];
const two = thisArray[1];
const lastItem = thisArray[thisArray.length - 1];
console.log(two);
console.log(lastItem);

const regularSentence = "Hi there, everybody. I am a sentence.";

for (i = 0; i < regularSentence.length; i++) {
  if (regularSentence[i] === "e") {
    console.log(i);
  } else {
    console.log(regularSentence[i]);
  }
}
