const mapIframe = document.getElementById("mapIframe");

const previousButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

previousButton.disabled = true;

const locationsArray = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.91309731446!2d34.72720549231833!3d32.08791223256964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1627564945823!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.70308833128!2d35.10531848361417!3d31.79629942847507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1627565016999!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221963.8759222313!2d34.81397979851681!3d29.62735335785491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071e324795e0b%3A0xfe1d95f85577f6db!2sEilat!5e0!3m2!1sen!2sil!4v1627565071866!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221064.77911001083!2d-90.02265005464186!3d30.03292224558392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0xdb065be85e22d3b4!2sNew%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sil!4v1627575172043!5m2!1sen!2sil",
];

// const locationsArray = ["fish_icon.png", "school_fish.jpg", "turtle.jpg"];

let i = 0;

const moveBackwards = () => {
  if (i === locationsArray.length - 1) {
    nextButton.disabled = false;
  }

  i -= 1;
  //   i = i - 1;
  if (i == 0) {
    previousButton.disabled = true;
  }
  console.log(i);
  console.log(locationsArray[i]);

  //   mapIframe.src = "../images/" + locationsArray[i];
  mapIframe.src = locationsArray[i];

  //   console.log(mapIframe.src);
};

const moveForwards = () => {
  i += 1;

  if (i > 0) {
    previousButton.disabled = false;
  }

  if (i === locationsArray.length - 1) {
    nextButton.disabled = true;
  }

  //   mapIframe.src = "../images/" + locationsArray[i];

  mapIframe.src = locationsArray[i];

  //   i = i + 1;
  console.log(i);
  console.log(locationsArray[i]);
  // console.log(mapIframe.src);
};

previousButton.addEventListener("click", moveBackwards);
nextButton.addEventListener("click", moveForwards);

const newFunc = (firstName) => {
  const lastName = "Grossman";
  const fullName = firstName + " " + lastName;
  return fullName;
};

const returnedValue = newFunc("Jon");
console.log(returnedValue);

const capturedValue = newFunc("Jonathan");
console.log(capturedValue);
