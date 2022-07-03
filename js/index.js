const addValue = () => {
  if (
    firstNameInput.value !== "" &&
    lastNameInput.value !== "" &&
    emailInput.value !== ""
  ) {
    // if none of the inputs are empty, run this code
    console.log("yes!");
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
  const formObject = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
  };
  console.log(formObject);
};

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitForm);

const sentenceHtml = document.getElementById("sentenceHtml");
console.log(sentenceHtml);

let startingPhrase = "I'm going to the beach, and I am bringing";
const arrayOfBeachThings = [
  "towel",
  "sunscreen",
  "drinks",
  "surfing board",
  "snacks",
];

for (let i = 0; i <= arrayOfBeachThings.length - 1; i++) {
  startingPhrase = startingPhrase + " " + arrayOfBeachThings[i];
}

sentenceHtml.textContent = startingPhrase;
