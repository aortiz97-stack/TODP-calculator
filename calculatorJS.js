let firstNumber;
let operation;
let secondNumber;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a, b){
    return a / b
}

function operate(func, a, b){
    return func(a,b);
}

function updateDisplay(newDisplay){
    let display = document.getElementById("display");
    display.textContent = newDisplay;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", () =>{
        if (firstNumber === undefined && typeof parseInt(button.id) === "number"){
            firstNumber = parseInt(button.id);
            console.log(`firstNumber: ${firstNumber}`);
        }
        else if (operation === undefined && (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷")){
            operation = button.id;
            console.log(`operation: ${operation}`);
        }
        else if (firstNumber !== undefined && typeof parseInt(button.id) === "number"){
            secondNumber = parseInt(button.id);
            console.log(`secondNumber: ${secondNumber}`);
        }
        updateDisplay(button.textContent);
    });
})