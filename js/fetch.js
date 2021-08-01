// Asynchronous blocks of code return a Promise
// fetch is an asynchronous block of code
// fetch returns a Promise
// *** A Promise is a value that does not yet exist *** //

const getInfoButton = document.getElementById("getInfoButton");

const usersArray = [
  "JonathanGrossmanITC",
  "bmhassid",
  "barrykuts",
  "rubintats",
  "otherNameHere",
];

const url = "https://api.github.com/users/";

// Example of a Promise in the console.
// const response = fetch(url);
// console.log(response);

const getUserInfo = () => {
  for (let i = 0; i <= usersArray.length - 1; i++) {
    fetch(url + usersArray[i])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dogApi = "https://dog.ceo/api/breeds/image/random";
        fetch(dogApi)
          .then((response) => response.json())
          .then((dogData) => {
            const myName = document.getElementById(usersArray[i]);
            myName.textContent = data["login"];

            const userPhoto = document.getElementById("photo" + usersArray[i]);
            userPhoto.src = data["avatar_url"];

            const dogPhoto = document.getElementById("dog" + usersArray[i]);
            //   dogPhoto.src = dogData["message"];
            dogPhoto.src = dogData.message;

            console.log(dogData);
          });
      });
  }
};

getInfoButton.addEventListener("click", getUserInfo);
