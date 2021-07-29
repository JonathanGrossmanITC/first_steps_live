const locationsArray = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.91309731446!2d34.72720549231833!3d32.08791223256964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1627564945823!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.70308833128!2d35.10531848361417!3d31.79629942847507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1627565016999!5m2!1sen!2sil",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221963.8759222313!2d34.81397979851681!3d29.62735335785491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071e324795e0b%3A0xfe1d95f85577f6db!2sEilat!5e0!3m2!1sen!2sil!4v1627565071866!5m2!1sen!2sil",
];

let i = 0;

const mapIframe = document.getElementById("mapIframe");

const previousButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const moveBackwards = () => {
  nextButton.disabled = false;

  if (i > 0) {
    i--;
    mapIframe.src = locationsArray[i];
  }

  if (i === 0) {
    previousButton.disabled = true;
  }
};

const moveForwards = () => {
  previousButton.disabled = false;

  if (i < locationsArray.length - 1) {
    i++;
    mapIframe.src = locationsArray[i];
  }

  if (i === locationsArray.length - 1) {
    nextButton.disabled = true;
  }
};

previousButton.addEventListener("click", moveBackwards);
nextButton.addEventListener("click", moveForwards);
