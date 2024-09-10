let firstNumber = null;
let secondNumber = null;
let operation = null;
let display = document.querySelector(".display h2");

//Function to update the display
function updateDisplay(value) {
    display.textContent = value;
}

// Function to handle number button clicks
function handleNumberClick(event) {
    let number = event.target.textContent;
    if (operation === null) {
        if (firstNumber === null) {
            firstNumber = number;
        } else {
            firstNumber += number;
        }
        updateDisplay(firstNumber);
    } else {
        if (secondNumber === null) {
            secondNumber = number;
        } else {
            secondNumber += number;
        }
        updateDisplay(secondNumber);
    }
}

// Function to handle operation button clicks
function handleOperationClick(event) {
    let op = event.target.textContent;
    if (firstNumber !== null) {
        operation = op;
    }
}

// Function to handle the equals button click
function handleResultClick() {
    if (firstNumber !== null && secondNumber !== null && operation !== null) {
        let result;
        switch (operation) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
            default:
                return;
        }
        updateDisplay(result);
        firstNumber = result;
        secondNumber = null;
        operation = null;
    }
}

//Function to handle clear button click
function handleClearClick() {
    firstNumber = null;
    secondNumber = null;
    operation = null;
    updateDisplay('0');
}


//Add event listeners to number buttons
document.querySelectorAll(".numbers button").forEach(button => {
    button.addEventListener("click", handleNumberClick)
});

//Add even listeners to operations button

document.querySelectorAll(".operations button").forEach(button => {
    if(button.classList.contains("result")) {
        button.addEventListener("click", handleResultClick);
    } else if (button.classList.contains("clear")) {
        button.addEventListener("click", handleClearClick);
    } else {
        button.addEventListener("click", handleOperationClick);
    }
});

// Initialize display
updateDisplay('0');

