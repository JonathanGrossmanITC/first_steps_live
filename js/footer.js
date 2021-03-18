const foodArray = ["egg", "", "egg", "tomato", "lemon"];
// const otherArray = ["apple"];
// index of last item in array is: foodArray.length - 1 (here it's 4)
// length of array is how many items are in the array

for (let i = 0; i < foodArray.length; i++) {
  if (foodArray[i] === "egg") {
    console.log("hi", i, foodArray[i]);
  } else if (foodArray[i] === "") {
    console.log("your handful is empty");
  } else if (foodArray[i] === "") {
    console.log("your handful is empty");
  } else if (foodArray[i] === "") {
    console.log("your handful is empty");
  } else if (foodArray[i] === "") {
    console.log("your handful is empty");
  } else {
    console.log("bye");
  }

  if (foodArray[i] === "egg") {
    console.log("hi", i, foodArray[i]);
  }

  if (foodArray[i] === "lime") {
    console.log("hi", i, foodArray[i]);
  }

  if (foodArray[i] === "soda") {
    console.log("hi", i, foodArray[i]);
  }

  if (foodArray[i] === "egg") {
    console.log("hi", i, foodArray[i]);
  } else {
    console.log("bye");
  }
}

// const someFunction = () => {
//   // here is the function code
//   for (let i = 0; i < foodArray.length; i++) {
//     console.log("hi", i, foodArray[i]);
//   }
// };

// someFunction();

// While loop
// x = 22;
// while (x > 10) {
//   x--;
//   console.log(x);
// }

// Comparison examples
const numberFive = 5;
const stringFive = "5";
const otherNumberFive = 5;

if (numberFive == stringFive) {
  console.log("five ==");
}
if (numberFive === stringFive) {
  console.log("five ==");
}

if (numberFive == otherNumberFive) {
  console.log("five ==");
}

if (numberFive === otherNumberFive) {
  console.log("five ===");
}

// Logical examples

// const numberFive = 5;
// const stringFive = "5";
// const otherNumberFive = 5;
const emptyVariable = "";
const emptyNumber = 0;
const emptyArray = [];

if (!otherNumberFive) {
  console.log("are we there yet?");
}

if (numberFive == stringFive && numberFive == 5) {
  console.log("five ==");
}
if (numberFive === stringFive || numberFive == 5) {
  console.log("five ==");
}

if (numberFive == otherNumberFive) {
  console.log("five ==");
}

if (numberFive === otherNumberFive) {
  console.log("five ===");
}
