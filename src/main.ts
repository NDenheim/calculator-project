import "./style.scss";

// //Build a calculator
// // When a button is pressed, this is displayed on the calculation display div

// //Select all buttons

// const buttons = document.querySelectorAll<HTMLButtonElement>("button");

// const display = document.querySelector<HTMLInputElement>("#display");

// if (!buttons || !display) {
//   throw new Error("Issue with button or display querySelector");
// }

// let numberClicked = buttons.values;

// const updateDisplay = () => {
//   //   console.log(numberClicked);
//   //   alert("hello");
//   //   display.valueAsNumber = numberClicked
//   display.value = numberClicked.toString();
// };

// buttons.forEach((button) => {
//   button.addEventListener("click", updateDisplay);
// });

// // // const calculation = document.querySelector<HTMLButtonElement>

// // const numberButtons = document.querySelectorAll(".darkgrey");

// // const operationButtons = document.querySelectorAll(".green");

// // const equalButton = document.querySelector(".equals");

// // const calculationDisplay = document.querySelector(".display");

// // if (!calculationDisplay) {
// //   throw new Error("Issue with calculation div querySelector");
// // }

// // calculationDisplay.textContent = "Start typing your calculation...";

// // const button = document.querySelector("button");

// // if (!button) {
// //   throw new Error("Issue with button querySelector");
// // }

// // if (!display) {
// //   throw new Error("Issue with button querySelector");
// // }

// // const updateDisplay = (event: Event) => {
// //   if (!calculationDisplay) {
// //     throw new Error("Issue with calculation div querySelector");
// //   }

// //   const output = document.getElementById(calculationDisplay).value;
// //   document.getElementById("display").innerHTML = output;
// // };

// // button.addEventListener("click", updateDisplay);

// // // const handleButtonClick = (event: Event) => {
// // //   const calculationDisplay;
// // // };

// // // Create function to tell computer to register on click

// // // And send that to display
// // // const updateDisplay = () => {
// // //   const calculationDisplay = document.querySelector<HTMLDivElement>(
// // //     ".display__calculation"
// // //   );
// // //   calculationDisplay.value;
// // // };

// // // Meanwhile calculate answer to calculation

// // // Push answer to answer display div
// // const answerDisplay = document.querySelector<HTMLElement>(".display__answer");

// // if (!answerDisplay) {
// //   throw new Error("Issue with answer div querySelector");
// // }

// // answerDisplay.textContent = "0";

// // ------------------------------------------

// // const buttons = document.querySelector<HTMLButtonElement>("button");

// // if (!buttons) {
// //   throw new Error("Issue with button or display querySelector");
// // }

// // const numberClicked = buttons.value;

// // const updateDisplay = (event: Event) => {
// //   console.log(numberClicked);
// // };

// // buttons.addEventListener("click", updateDisplay());

// ------------------------------------------------

const display = document.querySelector<HTMLInputElement>("#display");
const answer = document.querySelector<HTMLInputElement>("#display-answer");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const percentButton = document.querySelector(".percent");
const equalsButton = document.querySelector(".equals");
const invertButton = document.querySelector(".invert");

if (
  !display ||
  !numberButtons ||
  !clearButton ||
  !answer ||
  !percentButton ||
  !equalsButton ||
  !invertButton ||
  !operatorButtons
) {
  throw new Error("Issue with display or button querySelectors");
}

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

const clearDisplay = () => {
  display.value = "";
  answer.value = "";
};

clearButton.addEventListener("click", clearDisplay);

const invertSign = () => {
  display.value = display.value * -1;
};

invertButton.addEventListener("click", invertSign);

const findPercentage = () => {
  display.value /= 100;
};

percentButton.addEventListener("click", findPercentage);

// const calculateAnswer = () => {
//   let finalAnswer = eval(display.value);
//   answer.value = finalAnswer;
//   // If operator button then clicked, switch display to most recent answer
//   display.value = answer.value;
// };

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

console.log(Math.sin(90));
console.log(Math.sin(0));
console.log(Math.sin(1));
