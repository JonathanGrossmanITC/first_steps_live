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

// fetch("https://api.jokes.one/jod")
//   .then((response) => response.json())
//   .then((data) => {
//     const jokeOfTheDay = document.getElementById("jokeOfTheDay");
//     jokeOfTheDay.textContent = data.contents.jokes[0].joke.text;
//     console.log(jokeOfTheDay);
//     console.log(data.contents.jokes[0].joke.text);

//     const splitter = "A:";
//     const jokeArray = data.contents.jokes[0].joke.text.split(splitter);

//     console.log(jokeArray[0]);
//     console.log(splitter + jokeArray[1]);
//   });

// console.log(window.location);

const NORRIS_URL = "https://api.chucknorris.io/jokes/";

const selectCategory = (e) => {
  console.log(e.target.textContent);
  const categoryName = e.target.textContent;
  // https://api.chucknorris.io/jokes/random?category=career
  fetch(NORRIS_URL + "random?category=" + categoryName)
    .then((response) => response.json())
    .then((data) => {
      const displayJoke = document.getElementById("displayJoke");
      console.log(displayJoke);
      // console.log(data);
      console.log(data.value);

      const categoryTitle = document.createElement("a");
      categoryTitle.href = "./html/category.html?search=" + categoryName;
      categoryTitle.textContent = categoryName;
      displayJoke.append(categoryTitle);

      const jokeText = document.createElement("div");
      jokeText.textContent = data.value;
      displayJoke.append(jokeText);

      // How to remove a nested element from the dom
      // Dom built-in method example remove javascript
    });
};

// const NORRIS_URL = "https://api.chucknorris.io/jokes/categories";
fetch(NORRIS_URL + "categories")
  .then((response) => response.json())
  .then((data) => {
    const jokeCategories = document.getElementById("jokeCategories");
    // console.log(jokeCategories);
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      const category = document.createElement("div");
      category.textContent = data[i];
      // console.log(category);
      category.value = "something that the user doesn't see";
      category.classList.add("category-button");
      category.addEventListener("click", selectCategory);
      jokeCategories.append(category);
    }
  });
