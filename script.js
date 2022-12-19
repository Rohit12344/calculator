function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) {
        alert("You can't divide by 0.");
        return undefined;
      }
      return divide(a, b);
  }
}

let firstNum = 0,
  secondNum,
  symbol;
const topText = document.querySelector(".top-text");
const bottomText = document.querySelector(".bottom-text");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const dot = document.querySelector("#dot");

bottomText.textContent = 0;

function truncateDisplay(num) {
  let temp;
  num = num.toString();
  if (num.length <= 13) {
    if (num.includes(".") && num.indexOf(".") < 12) {
      temp = 12 - num.indexOf(".");
      num = +num;
      return parseFloat(num.toFixed(temp));
    }
    return +num;
  } else {
    if (num.includes(".") && num.indexOf(".") < 12) {
      temp = 12 - num.indexOf(".");
      num = +num;
      return parseFloat(num.toFixed(temp));
    }
    alert(
      "Can't display the result because the result exceed the display range of numbers (13 characters including '.'). Please delete some numbers or press 'C' button in order to continue the calculation."
    );
    return undefined;
  }
}

function display(event) {
  if (symbol === undefined) {
    if (bottomText.textContent === "0") {
      bottomText.textContent = "";
    }
    if (bottomText.textContent.length < 13) {
      bottomText.textContent += event.target.textContent;
      firstNum = bottomText.textContent;
    } else {
      alert(
        "Can't enter numbers more than 13 characters including '.'. Please delete some numbers or press 'C' button in order to continue the calculation."
      );
    }
  } else {
    if (secondNum === undefined || bottomText.textContent === "0") {
      bottomText.textContent = "";
    }
    if (bottomText.textContent.length < 13) {
      bottomText.textContent += event.target.textContent;
      secondNum = bottomText.textContent;
    } else {
      alert(
        "Can't enter numbers more than 13 characters including '.'. Please delete some numbers or press 'C' button in order to continue the calculation."
      );
    }
  }
}

function operateFunction(event) {
  if (secondNum !== undefined) {
    if (truncateDisplay(operate(+firstNum, +secondNum, symbol)) !== undefined) {
      firstNum = operate(+firstNum, +secondNum, symbol);
      bottomText.textContent = truncateDisplay(firstNum);
      secondNum = undefined;
    }
  }
  topText.textContent = "";
  topText.textContent += firstNum + " " + event.target.textContent;
  symbol = event.target.textContent;
}

function equalFunction(event) {
  if (firstNum !== undefined && secondNum !== undefined) {
    if (truncateDisplay(operate(+firstNum, +secondNum, symbol)) !== undefined) {
      topText.textContent = "";
      topText.textContent +=
        firstNum +
        " " +
        symbol +
        " " +
        secondNum +
        " " +
        event.target.textContent;
      firstNum = operate(+firstNum, +secondNum, symbol);
      bottomText.textContent = truncateDisplay(firstNum);
      secondNum = undefined;
      symbol = undefined;
    }
  }
}

function clearFunction() {
  bottomText.textContent = 0;
  topText.textContent = "";
  firstNum = 0;
  secondNum = undefined;
  symbol = undefined;
}

function delFunction() {
  bottomText.textContent = bottomText.textContent.substring(
    0,
    bottomText.textContent.length - 1
  );
  secondNum = bottomText.textContent;
  if (bottomText.textContent === "") {
    bottomText.textContent = 0;
    secondNum = 0;
  }
  if (topText.textContent.includes("=")) {
    firstNum = bottomText.textContent;
    secondNum = undefined;
    symbol = undefined;
  }
}

function dotFunction() {
    if(!bottomText.textContent.includes('.'))
    bottomText.textContent += '.';
}

numbers.forEach((number) => number.addEventListener("click", display));
operators.forEach((operator) =>
  operator.addEventListener("click", operateFunction)
);
equals.addEventListener("click", equalFunction);
clear.addEventListener("click", clearFunction);
del.addEventListener("click", delFunction);
dot.addEventListener("click", dotFunction);
