let currentInput = "";
let currentOperation = null;
const display = document.getElementById("display");

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function setOperation(op) {
  if (currentOperation !== null) calculate();
  currentOperation = op;
  currentInput += op;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  currentOperation = null;
  display.value = currentInput;
}

function calculate() {
  if (currentOperation === null) return;
  let [num1, num2] = currentInput.split(currentOperation);
  let result = 0;
  switch (currentOperation) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }
  display.value = result;
  currentInput = result.toString();
  currentOperation = null;
}
