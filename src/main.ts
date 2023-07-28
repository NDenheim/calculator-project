import "./style.scss";

//Build a calculator
// When a button is pressed, this is displayed on the calculation display div

//Select all buttons

const buttons = document.querySelectorAll<HTMLButtonElement>("button");

const display = document.querySelector<HTMLInputElement>("#display");

if (!buttons || !display) {
  throw new Error("Issue with button or display querySelector");
}

const updateDisplay = () => {
  //   alert("hello");
  display.textContent = "hello";
};

buttons.forEach((button) => {
  button.addEventListener("click", updateDisplay);
});

// // const calculation = document.querySelector<HTMLButtonElement>

// const numberButtons = document.querySelectorAll(".darkgrey");

// const operationButtons = document.querySelectorAll(".green");

// const equalButton = document.querySelector(".equals");

// const calculationDisplay = document.querySelector(".display");

// if (!calculationDisplay) {
//   throw new Error("Issue with calculation div querySelector");
// }

// calculationDisplay.textContent = "Start typing your calculation...";

// const button = document.querySelector("button");

// if (!button) {
//   throw new Error("Issue with button querySelector");
// }

// if (!display) {
//   throw new Error("Issue with button querySelector");
// }

// const updateDisplay = (event: Event) => {
//   if (!calculationDisplay) {
//     throw new Error("Issue with calculation div querySelector");
//   }

//   const output = document.getElementById(calculationDisplay).value;
//   document.getElementById("display").innerHTML = output;
// };

// button.addEventListener("click", updateDisplay);

// // const handleButtonClick = (event: Event) => {
// //   const calculationDisplay;
// // };

// // Create function to tell computer to register on click

// // And send that to display
// // const updateDisplay = () => {
// //   const calculationDisplay = document.querySelector<HTMLDivElement>(
// //     ".display__calculation"
// //   );
// //   calculationDisplay.value;
// // };

// // Meanwhile calculate answer to calculation

// // Push answer to answer display div
// const answerDisplay = document.querySelector<HTMLElement>(".display__answer");

// if (!answerDisplay) {
//   throw new Error("Issue with answer div querySelector");
// }

// answerDisplay.textContent = "0";
