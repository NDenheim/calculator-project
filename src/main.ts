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
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");

if (!display || !numberButtons || !clearButton) {
  throw new Error("Issue with display or button querySelector");
}

// const updateDisplay = () => {
//   display.value += numberButtons[2].textContent;
// };
// let buttonValue = numberButtons.innerText;

// const updateDisplay = () => {
//   display.value += buttonValue;
// };

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.innerHTML;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.innerHTML;
  });
});

const clearDisplay = () => {
  display.value = " ";
};

clearButton.addEventListener("click", clearDisplay);
