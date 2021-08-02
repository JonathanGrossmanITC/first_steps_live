console.log("from the calendar");
const calendarWrapper = document.getElementById("calendarWrapper");
console.log(calendarWrapper);

const url = "https://powerful-sands-42937.herokuapp.com/get-dates";
// const jokesUrl = "http://api.icndb.com/jokes/" + data[i]["date"];

const saveJoke = (e) => {
  console.log(e.target.name);
  const dateObject = JSON.parse(e.target.name);
  console.log(dateObject);
  const jokesFromLS = localStorage.getItem("jokes");
  const jokesArray = JSON.parse(jokesFromLS);
  jokesArray.push(dateObject);
  localStorage.setItem("jokes", JSON.stringify(jokesArray));

  const jokesFromLSAgain = localStorage.getItem("jokes");
  const jokesArrayAgain = JSON.parse(jokesFromLSAgain);
  console.log(jokesArrayAgain);
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i <= data.length - 1; i++) {
      //   console.log(data[i]);
      //   console.log(data[i]["date"]);
      //   console.log(data[i]["weekday"]);
      const jokesUrl = "http://api.icndb.com/jokes/" + data[i]["date"];

      fetch(jokesUrl)
        .then((response) => response.json())
        .then((jokesData) => {
          //   console.log(jokesData.value["joke"]);
          const dayWrapper = document.createElement("div");
          dayWrapper.classList.add("day-wrapper");

          const dayOfWeek = document.createElement("div");
          dayOfWeek.classList.add("day-of-week");
          dayOfWeek.textContent = data[i]["weekday"];

          const date = document.createElement("div");
          date.classList.add("date");
          date.textContent = data[i]["date"];

          //   console.log(dayOfWeek, date);
          dayWrapper.append(dayOfWeek, date);
          calendarWrapper.append(dayWrapper);

          //   console.log(jokesUrl);

          const jokeDate = document.createElement("div");
          jokeDate.textContent = jokesData.value["joke"];
          dayWrapper.append(jokeDate);

          const button = document.createElement("button");
          button.textContent = "Save";
          button.name = JSON.stringify({
            weekday: data[i]["weekday"],
            date: data[i]["date"],
            joke: jokesData.value["joke"],
          });
          button.addEventListener("click", saveJoke);
          dayWrapper.append(button);
        });
    }
  });
