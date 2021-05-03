console.log(document);

const firstName = document.getElementById("firstName");
// console.log(firstName);
// console.log(firstName.classList);
// console.log(firstName.id);
// console.log(firstName.type);
// console.log(firstName.placeholder);
const lastName = document.getElementById("lastName");
const submitButton = document.getElementById("submitButton");
const checkbox = document.getElementById("checkbox");
const fileInput = document.getElementById("fileInput");

const onInput = () => {
  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    checkbox.checked === true &&
    fileInput.value !== ""
  ) {
    submitButton.disabled = false;

    // Delete console logs in a real project, but we left them in here
    // to remind you of the dev techniques we use

    // console.log("first: ", firstName.value);
    // console.log("last: ", lastName.value);
    // console.log(submitButton.disabled);
    // console.log(checkbox.checked);
    // console.log(fileInput.value);
  }
};

firstName.addEventListener("input", onInput);
lastName.addEventListener("input", onInput);
checkbox.addEventListener("input", onInput);
fileInput.addEventListener("input", onInput);

const submitForm = () => {
  // Delete console logs in a real project, but we left them in here
  // to remind you of the dev techniques we use
  // console.log("from the form button");

  console.log("first: ", firstName.value);
  console.log("last: ", lastName.value);
  console.log("checkbox: ", checkbox.checked);
  console.log("file: ", fileInput.value);
};

submitButton.addEventListener("click", submitForm);

const image = document.getElementById("image");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
console.log(image);
console.log(previousButton);
console.log(nextButton);

const arrayOfImages = ["fish_icon.png", "turtle.jpg", "cartoon_soccer.png"];
let i = 0;

const moveBackwards = () => {
  nextButton.disabled = false;

  if (i > 0) {
    i--;
    image.src = "../images/" + arrayOfImages[i];
  }

  if (i === 0) {
    previousButton.disabled = true;
  }
};

const moveForwards = () => {
  previousButton.disabled = false;

  if (i < arrayOfImages.length - 1) {
    i++;
    image.src = "../images/" + arrayOfImages[i];
  }

  if (i === arrayOfImages.length - 1) {
    nextButton.disabled = true;
  }
};

previousButton.addEventListener("click", moveBackwards);
nextButton.addEventListener("click", moveForwards);
