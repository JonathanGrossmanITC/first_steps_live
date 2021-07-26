// // Get one element from the HTML file
// // for working with in the JS file

// const favoriteSport = document.getElementById("favoriteSport");
// console.log(favoriteSport);
// console.log(favoriteSport.type);
// console.log(favoriteSport.placeholder);
// console.log(favoriteSport.classList);

// const numberInput = document.getElementById("numberInput");
// console.log(numberInput);

// // Make the HTML element interactive
const favoriteSport = document.getElementById("favoriteSport");
const numberInput = document.getElementById("numberInput");
const file = document.getElementById("file");

const submitButton = document.getElementById("submitButton");
// console.log(submitButton);

const getInputsAttributes = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.id);
  //   console.log(e.target.classList);
  //   console.log(e.target.textContent);
  //   console.log(e.target.disabled);

  e.target.textContent = "Gotcha";
  //   e.target.disabled = true;

  console.log("it's working!");

  //   console.log(e.target.classList.add("disabled-button"));
  e.target.classList.add("disabled-button");
  e.target.classList.remove("enabled-button");

  //   console.log(favoriteSport);
  //   console.log(favoriteSport.type);
  //   console.log(favoriteSport.placeholder);
  //   console.log(favoriteSport.classList);

  if (favoriteSport.value === "basketball") {
    // write some code here
    console.log(favoriteSport.value);
    console.log(favoriteSport.value === "basketball");
    console.log("I like basketball too.");
  } else {
    console.log(favoriteSport.value);
    console.log(favoriteSport.value === "basketball");
    console.log("Oh, I like basketball");
  }
};

const printInputValues = (e) => {
  if (
    favoriteSport.value !== "" &&
    numberInput.value !== "" &&
    file.value !== ""
  ) {
    console.log("form complete!");
    submitButton.disabled = false;
    submitButton.classList.add("enabled-button");
    submitButton.classList.remove("disabled-button");
  } else if (
    favoriteSport.value !== "" ||
    numberInput.value !== "" ||
    file.value !== ""
  ) {
    console.log("nice start, keep going . . .");
  } else {
    console.log("Your form is incomplete");
    submitButton.disabled = true;
    submitButton.classList.add("disabled-button");
    submitButton.classList.remove("enabled-button");
  }

  // Another Option That Works

  // if (e.target.value !== "") {
  //   console.log(e.target.value);
  //   submitButton.disabled = false;
  //   submitButton.classList.add("enabled-button");
  //   submitButton.classList.remove("disabled-button");
  // }

  // if (e.target.value === "") {
  //   console.log("empty input");
  //   submitButton.disabled = true;
  //   submitButton.classList.add("disabled-button");
  //   submitButton.classList.remove("enabled-button");
  // }
};

// // This is a function definition
() => {
  // write some code
};

submitButton.addEventListener("click", getInputsAttributes);
favoriteSport.addEventListener("input", printInputValues);
numberInput.addEventListener("input", printInputValues);
file.addEventListener("input", printInputValues);

// // Examples of expressions
// if (favoriteSport.value === "basketball") {
//   // write some code here
//   console.log(favoriteSport.value);
//   console.log(favoriteSport.value === "basketball");
//   console.log("I like basketball too.");
// } else if (favoriteSport !== "futbol") {
//   console.log("You mean soccer or American football?");
// } else if (favoriteSport !== "rugby") {
//   console.log("You mean soccer or American football?");
// } else if (favoriteSport !== "baseball") {
//   console.log("You mean soccer or American football?");
// } else {
//   // some code
// }

// // Example for loop

let intro = "I love to eat: ";
const foodsArray = ["peanut butter", "jelly", "chocolate", "bread", "honey"];
// First index position: 0
// Array length: foodsArray.length // now, length is 3
// Last index position: foodsArray.length - 1

for (let i = 0; i <= foodsArray.length - 1; i++) {
  if (i === foodsArray.length - 1) {
    // code here
    intro = intro + "and " + foodsArray[i] + "."; // string concatentation
  } else {
    // code here
    intro = intro + foodsArray[i] + ", "; // string concatentation
  }

  // If you want to check the second to last item too, here's the code
  // if (i === foodsArray.length - 1) {
  //   // code here
  //   intro = intro + "and " + foodsArray[i] + "."; // string concatentation
  // } else if (i === foodsArray.length - 2) {
  //   // some code here
  // } else {
  //   // code here
  //   intro = intro + foodsArray[i] + ", "; // string concatentation
  // }

  console.log(i, foodsArray[i]);
  console.log(intro);
}

console.log("completed sentence: ", intro);

// console.log(foodsArray[2]);
// console.log(foodsArray[1]);
