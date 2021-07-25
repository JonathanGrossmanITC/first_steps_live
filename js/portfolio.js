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

const submitButton = document.getElementById("submitButton");
console.log(submitButton);

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
};

const printInputValues = (e) => {
  if (e.target.value !== "") {
    console.log(e.target.value);
    submitButton.disabled = false;
    submitButton.classList.add("enabled-button");
    submitButton.classList.remove("disabled-button");
  } else {
    console.log("empty input");
  }
};

// // This is a function definition
() => {
  // write some code
};

submitButton.addEventListener("click", getInputsAttributes);
favoriteSport.addEventListener("input", printInputValues);
