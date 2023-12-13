let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

function appendDigit(digit) {
    currentInput += digit;
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = "";
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function calculateResult() {
    let result;
    switch (operator) {
        case "+":
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case "-":
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case "*":
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case "/":
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        case "%":
            result = parseFloat(previousInput) % parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    operator = " ";
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || "0";
}
