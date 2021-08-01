const printName = (firstName, lastName) => {
  const welcomeMessage = "Hi there, ";
  const fullName = firstName + " " + lastName;
  const fullMessage = welcomeMessage + fullName;
  return fullMessage;
};

// printName("Jack", "Beanstalk");
// printName();

// const printNumber = () => {
//   console.log(8);
// };

// printNumber();

const welcomeJack = printName("Jack", "Beanstalk");
console.log("welcomeJack: ", welcomeJack);

const welcomeJill = printName("Jill", "Hill");
console.log("welcomeJill: ", welcomeJill);

const getStyle = (element) => {
  if (element.disabled === true) {
    return "disabled-button";
  } else {
    return "enabled-button";
  }
};

const getButton = (elementId, buttonText) => {
  const htmlButton = document.getElementById(elementId);
  htmlButton.innerHTML = buttonText;
  const buttonStyle = getStyle(htmlButton);

  console.log(buttonStyle);
  htmlButton.classList.add(buttonStyle);
  //   console.log(htmlButton);
  //   return htmlButton;
};

getButton("prevButton", "back");
getButton("nextButton", "forward");

// const prevButton = getButton("prevButton");
// const nextButton = getButton("nextButton");

// console.log(prevButton);
// console.log(nextButton);
