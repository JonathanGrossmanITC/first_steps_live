const arrayOfSummertime = [
  "beach",
  "sunshine",
  "ice cream",
  "air conditioning",
  "suntanning",
];

const reversedSummertime = [];

// The condition is checking if the index counter is
// less than the last index position in the array
// can also use <= with .length -1
for (let i = 0; i < arrayOfSummertime.length; i++) {
  //   console.log(i, arrayOfSummertime[i]);
  //   console.log(arrayOfSummertime[i]);
  const reversedString = arrayOfSummertime[i].split("").reverse().join("");
  reversedSummertime.push(reversedString);
}

// console.log(reversedSummertime);

// arrayOfSummertime.forEach((item, index) => {
//   console.log(index, item);
// });

// const exampleFunc = function () {};

// if (arrayOfSummertime.length > 3) {
//   console.log("summertime");
// } else if (arrayOfSummertime.length === 2) {
//   console.log("next summer");
// } else if (arrayOfSummertime.length === 1) {
//   console.log("summer after next");
// } else {
//   console.log("must be winter time");
// }

// console.log(9 == "9");
// console.log(9 === "9" && "9" === "9");

if (arrayOfSummertime.length > 0 || arrayOfSummertime.length === -1000) {
  console.log("hooray");
}
console.log(false);

const exampleVar = 90876;
