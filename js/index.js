const addValue = () => {
  if (
    firstNameInput.value !== "" &&
    lastNameInput.value !== "" &&
    emailInput.value !== ""
  ) {
    // if none of the inputs are empty, run this code
    submitButton.disabled = false;
    submitButton.classList.add("form-button");
    submitButton.classList.remove("form-button-disabled");
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove("form-button");
    submitButton.classList.add("form-button-disabled");
    // if any of the inputs are empty, do this stuff
  }
};

const firstNameInput = document.getElementById("firstNameInput");
firstNameInput.addEventListener("input", addValue);
// console.log(firstNameInput);

const lastNameInput = document.getElementById("lastNameInput");
lastNameInput.addEventListener("input", addValue);
// console.log(lastNameInput);

const emailInput = document.getElementById("emailInput");
emailInput.addEventListener("input", addValue);
const submitForm = () => {
  console.log("form");
};
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitForm);

// ((userObj) => {
//   console.log("Welcome to ITC, " + userObj.firstName + " " + userObj.lastName);
//   return;
// })();

// Example of arrow function
const greetUser = (userFirstName) => {
  const greeting = "Welcome to ITC, " + userFirstName;
  console.log(greeting);
  return greeting;
};

const firstName = "josh";

const userGreeting = greetUser(firstName);

console.log(userGreeting);

// const currentUser = {
//   lastName: lastNameInput.value,
//   firstName: "joe",
// };

// greetUser(currentUser);

// Example of function keyword function
// function myFunction(a, b) {
//   return a * b;
// }

// myFunction();

const sendMessage = () => {
  const message = "Hello World";
  return message;
};

// sendMessage();

const helloMessage = sendMessage();

console.log(helloMessage);

const multiplyNumbers = (num1, num2) => {
  const productOfNums = num1 * num2;
  return productOfNums;
};

const multipliedProduct = multiplyNumbers(10, 9);

console.log(multipliedProduct);

// const getSentenceHtml = () => {
//   const sentenceHtml = document.getElementById("sentenceHtml");
//   let startingPhrase = "I'm going to the beach, and I am bringing";
//   const arrayOfBeachThings = [
//     "towel",
//     "sunscreen",
//     "drinks",
//     "surfing board",
//     "snacks",
//   ];
//   for (let i = 0; i <= arrayOfBeachThings.length - 1; i++) {
//     if (i === arrayOfBeachThings.length - 1) {
//       startingPhrase = startingPhrase + " and " + arrayOfBeachThings[i] + ".";
//     } else if (i === 0) {
//       startingPhrase = startingPhrase + " a " + arrayOfBeachThings[i] + ", ";
//     } else {
//       startingPhrase = startingPhrase + " " + arrayOfBeachThings[i] + ",";
//     }
//   }
//   sentenceHtml.textContent = startingPhrase;
// };

// const buildButton = document.getElementById("buildButton");
// buildButton.addEventListener("click", getSentenceHtml);

let startingPhrase = "I'm going to the beach, and I am bringing";
const arrayOfBeachThings = [
  "towel",
  "sunscreen",
  "drinks",
  "surfing board",
  "snacks",
];

let startingPhraseTwo = "I'm leaving the park, and I forgot my";
const arrayOfBeachThingsTwo = ["sun glasses", "lip balm", "socks", "keys"];

const getSentenceHtml = (phrase, arrayOfItems, htmlElement) => {
  const sentenceHtml = document.getElementById(htmlElement);

  for (let i = 0; i <= arrayOfItems.length - 1; i++) {
    if (i === arrayOfItems.length - 1) {
      phrase = phrase + " and " + arrayOfItems[i] + ".";
    } else if (i === 0) {
      phrase = phrase + " a " + arrayOfItems[i] + ", ";
    } else {
      phrase = phrase + " " + arrayOfItems[i] + ",";
    }
  }
  sentenceHtml.textContent = phrase;
};

getSentenceHtml(startingPhrase, arrayOfBeachThings, "sentenceHtml");
getSentenceHtml(startingPhraseTwo, arrayOfBeachThingsTwo, "sentenceHtmlTwo");

const showingMoveConsoleTechn = (e) => {
  const buttonText = e.target.textContent;
  const revesedText = buttonText.split("").reverse().join("");
  const upperReversedText = revesedText.toUpperCase();
  console.log(upperReversedText);
};

const moveButton = document.getElementById("moveButton");
moveButton.addEventListener("click", showingMoveConsoleTechn);
