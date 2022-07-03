// Once something is saved in memory, you can interact with it in your JavaScript code
// You can save any data type to a variable
// Once something is saved as a variable, the variable represents that thing in memory, which means the variable can do the things that the underlying data is capable of
// -- For instance, a number stored in a variable: you can add, subtract, multiply, divide and more using the variable
// -- Another is example is a string stored in a variable: you can use that variable to set the text of an HTML element
const changePhoto = () => {
  sidebarImage.src = "./images/street.png";
};

const sidebarImage = document.getElementById("sidebarImage");
sidebarImage.addEventListener("click", changePhoto);

const addValue = (e) => {
  console.log(e.target.value);
};

const firstNameInput = document.getElementById("firstNameInput");
firstNameInput.addEventListener("input", addValue);
// console.log(firstNameInput);

const lastNameInput = document.getElementById("lastNameInput");
lastNameInput.addEventListener("input", addValue);
// console.log(lastNameInput);

const emailInput = document.getElementById("emailInput");
emailInput.addEventListener("input", addValue);
// console.log(emailInput);

const submitForm = () => {
  const formObject = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
  };
  console.log(formObject);
};

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitForm);
console.log(submitButton);

const photosArray = ["street.png", "beach.png", "summertime-legs.jpeg"];

let counter = 0;

const moveBackwards = () => {
  console.log("back");
  if (counter > 0) {
    counter--;
    sidebarImage.src = "../images/" + photosArray[counter];
  }
};
const moveForwards = () => {
  console.log("forward");
  if (counter < photosArray.length - 1) {
    counter++;
    sidebarImage.src = "../images/" + photosArray[counter];
  }
  // sidebarImage.classList.add("nameoftheclass");
  // sidebarImage.classList.remove("nameoftheclass");
};

const prevButton = document.getElementById("prevButton");
prevButton.addEventListener("click", moveBackwards);

const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", moveForwards);

// const exampleObject = {
//   first: "Joe",
//   last: "Doe",
//   birthday: "today",
//   color: "blue",
//   example_function: () => {
//     console.log("hello");
//   },
// };

// const exampleArray = ["", 0, 9];

// const exampleString = "Birthday";
// console.log(exampleString[4]);

// console.log(exampleObject["birthday"]);
// exampleObject.example_function();

// console.log(Object.keys(exampleObject));
