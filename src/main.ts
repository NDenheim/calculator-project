import "./style.scss";

// //Build a calculator

// let numberClicked = buttons.values;

// const updateDisplay = () => {
//   //   console.log(numberClicked);
//   //   alert("hello");
//   //   display.valueAsNumber = numberClicked
//   display.value = numberClicked.toString();
// };


// // calculationDisplay.textContent = "Start typing your calculation...";

// ------------------------------------------------

// Select all buttons and display

const display = document.querySelector<HTMLInputElement>("#display");
const answer = document.querySelector<HTMLInputElement>("#display-answer");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const percentButton = document.querySelector(".percent");
const equalsButton = document.querySelector(".equals");
const invertButton = document.querySelector(".invert");
const otherButtons = document.querySelectorAll(".other");
const squareRootButton = document.querySelector(".squareRoot");
const cubeRootButton = document.querySelector(".cubeRoot");
const piButton = document.querySelector(".pi")

if (
  !display ||
  !answer) {
  throw new Error("Issue with a display querySelector");
}

if (
  !numberButtons ||
  !clearButton ||
  !percentButton ||
  !equalsButton ||
  !invertButton ||
  !operatorButtons || 
  !otherButtons || 
  !squareRootButton || 
  !cubeRootButton || 
  !piButton) {
  throw new Error("Issue with a button querySelector");
}

// Button values that are just added to the display screen

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.innerHTML;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += " " + button.value + " ";
  });
});

otherButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += " " + button.value + " ";
  });
});

// Clear button

const clearDisplay = () => {
  display.value = "";
  answer.value = "";
};

clearButton.addEventListener("click", clearDisplay);

// Negative button

const invertSign = () => {
  display.value = display.value * -1;
};

invertButton.addEventListener("click", invertSign);

// Pi button

const usePi = () => {
  display.value += " " + Math.PI.toFixed(4) + " "
}

piButton.addEventListener("click", usePi);

// Percentage button

const findPercentage = () => {
  display.value /= 100;
};

percentButton.addEventListener("click", findPercentage);

// Square and cube root buttons

const findSquareRoot = () => {
  let userInput = display.value;
  let result = Function("return " + Math.sqrt(userInput))();
  answer.value = result
}

squareRootButton.addEventListener("click", findSquareRoot)

const findCubeRoot = () => {
  let userInput = display.value;
  let result = Function("return " + Math.cbrt(userInput))();
  answer.value = result
}

cubeRootButton.addEventListener("click", findCubeRoot)

// Equals button

const calculateAnswer = () => {
  let userInput = display.value;
  let result = Function("return " + userInput)();
  answer.value = result;

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (answer.value != "") {
        display.value = answer.value;
        display.value += " " + button.value + " ";
      }
    });
  });
};

equalsButton.addEventListener("click", calculateAnswer);
