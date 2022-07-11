//
//
// SENTENCE SECTION
//
//

// console.log("immediately");

// const sentenceHTML = document.getElementById("sentenceHTML");
// console.log(sentenceHTML);

// const arrayLanguages = [
//   "Spanish",
//   "French",
//   "Hebrew",
//   "Klingon",
//   "Romanian",
//   "Japanese",
// ];

// let languagesSentence = "I speak";

// for (let i = 0; i < arrayLanguages.length; i++) {
//   if (i === arrayLanguages.length - 1) {
//     languagesSentence = languagesSentence + " and " + arrayLanguages[i] + ".";
//   } else if (i === 0) {
//     languagesSentence = languagesSentence + " " + arrayLanguages[i];
//   } else {
//     languagesSentence = languagesSentence + ", " + arrayLanguages[i];
//   }
// }

// sentenceHTML.textContent = languagesSentence;

//
//
// MAPS SECTION
//
//

const mainMap = document.getElementById("mainMap");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

let counter = 0;

const arrayOfMaps = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.74093131749!2d34.72720550424106!3d32.088057675207395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1657560255980!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798991042!2d-74.25987062089825!3d40.697670066303914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sil!4v1657560727718!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182321.80597958053!2d25.80754540123156!3d44.437711384926274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sil!4v1657560676957!5m2!1sen!2sil",
];

const moveBack = () => {
  if (counter !== 0) {
    counter--;
    mainMap.src = arrayOfMaps[counter];
  }

  nextButton.disabled = false;
  nextButton.classList.add("enabled");
  nextButton.classList.remove("disabled");

  if (counter === 0) {
    previousButton.disabled = true;
    previousButton.classList.add("disabled");
    previousButton.classList.remove("enabled");
  }

  console.log(counter);
};

const moveForward = () => {
  if (counter !== arrayOfMaps.length - 1) {
    counter++;
    mainMap.src = arrayOfMaps[counter];
  }

  previousButton.disabled = false;
  previousButton.classList.add("enabled");
  previousButton.classList.remove("disabled");

  if (counter === arrayOfMaps.length - 1) {
    nextButton.disabled = true;
    nextButton.classList.add("disabled");
    nextButton.classList.remove("enabled");
  }
  console.log(counter);
};

console.log(previousButton, nextButton);

previousButton.addEventListener("click", moveBack);
nextButton.addEventListener("click", moveForward);
