import "./style.scss";

const display: any = document.querySelector<HTMLInputElement>("#display");
const answer = document.querySelector<HTMLInputElement>("#display-answer");
const numberButtons: any = document.querySelectorAll(".number");
const operatorButtons =
  document.querySelectorAll<HTMLButtonElement>(".operator");
const clearButton = document.querySelector(".clear");
const percentButton = document.querySelector(".percent");
const equalsButton = document.querySelector(".equals");
const invertButton = document.querySelector(".invert");
const otherButtons = document.querySelectorAll<HTMLButtonElement>(".other");
const squareRootButton = document.querySelector(".squareRoot");
const cubeRootButton = document.querySelector(".cubeRoot");
const piButton = document.querySelector(".pi");
const trigButtons = document.querySelectorAll(".trig");
const ansButton = document.querySelector(".ans");
const darkModeButton = document.querySelector("#dark-mode");

if (!display || !answer) {
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
  !piButton ||
  !trigButtons ||
  !ansButton ||
  !darkModeButton
) {
  throw new Error("Issue with a button querySelector");
}

// Button values that are just added to the display screen

numberButtons.forEach((button: any) => {
  button.addEventListener("click", () => {
    display.value += button.value;
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
  display.value += " " + Math.PI.toFixed(7) + " ";
};

piButton.addEventListener("click", usePi);

// Percentage button

const findPercentage = () => {
  display.value /= 100;
};

percentButton.addEventListener("click", findPercentage);

// Square and cube root buttons

const findSquareRoot = () => {
  let userInput = display.value;
  let result = Function("return " + Math.sqrt(Number(userInput)))();
  answer.value = result;
};

squareRootButton.addEventListener("click", findSquareRoot);

const findCubeRoot = () => {
  let userInput = display.value;
  let result = Function("return " + Math.cbrt(Number(userInput)))();
  answer.value = result;
};

cubeRootButton.addEventListener("click", findCubeRoot);

// Sin, cos, tan

const calculateTrigButtons = (event: any) => {
  if (event.target.innerText == "sin") {
    let userInput = display.value;
    let result = Function(
      "return " + Math.sin((Number(userInput) * Math.PI) / 180)
    )(); // Converts degrees to radians
    answer.value = result;
  } else if (event.target.innerText == "cos") {
    let userInput = display.value;
    let result = Function(
      "return " + Math.cos((Number(userInput) * Math.PI) / 180)
    )();
    answer.value = result;
  } else {
    let userInput = display.value;
    let result = Function(
      "return " + Math.tan((Number(userInput) * Math.PI) / 180)
    )();
    answer.value = result;
  }
};

trigButtons.forEach((button) => {
  button.addEventListener("click", calculateTrigButtons);
});

// Ans button

const usePreviousAnswer = () => {
  display.value = answer.value;
  answer.value = "";
};

ansButton.addEventListener("click", usePreviousAnswer);

// Equals button

const calculateAnswer = () => {
  let userInput = display.value;
  let result = Function("return " + userInput)();
  answer.value = result;

  // Uses previous answer when you click on an operator

  // operatorButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     if (answer.value != "") {
  //       display.value = answer.value;
  //       display.value += " " + button.value + " ";
  //     }
  //   });
  // });
};

equalsButton.addEventListener("click", calculateAnswer);

const toggleDarkMode = () => {
  document.body.classList.toggle("useDarkMode");
};

darkModeButton.addEventListener("click", toggleDarkMode);
