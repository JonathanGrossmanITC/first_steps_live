// const URL = "https://dog.ceo/api/breeds/image/random";
const URL = "https://api.github.com/users/jonathangrossmanitc";

// console.log(fetch(URL).then((response) => response.json()));

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const sidebarImage = document.getElementById("sidebarImage");
    sidebarImage.src = data.avatar_url;

    const gitHubLink = document.getElementById("gitHubLink");
    gitHubLink.textContent = "Come visit my code at " + data.login;
    gitHubLink.href = data.html_url;

    console.log(data);
  });

// setTimeout(() => {
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       const sidebarImage = document.getElementById("sidebarImage");
//       sidebarImage.src = data.message;
//     });
// }, 1000);

// Example of POST REQUEST
// fetch(URL, {
//     method: "POST",
//     body: JSON.stringify(data),
//   }).then(...).then(...)

fetch("https://api.jokes.one/jod")
  .then((response) => response.json())
  .then((data) => {
    const jokeOfTheDay = document.getElementById("jokeOfTheDay");
    jokeOfTheDay.textContent = data.contents.jokes[0].joke.text;
    console.log(jokeOfTheDay);
    console.log(data.contents.jokes[0].joke.text);

    const splitter = "A:";
    const jokeArray = data.contents.jokes[0].joke.text.split(splitter);

    console.log(jokeArray[0]);
    console.log(splitter + jokeArray[1]);
  });
