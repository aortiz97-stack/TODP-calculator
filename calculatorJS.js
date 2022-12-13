let firstNumber = "";
let operation;
let secondNumber = "";

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
        if (firstNumber.length <= 9 && ((typeof parseInt(button.id) === "number" && !isNaN(parseInt(button.id))) || button.id===".") && operation===undefined){
            firstNumber += (button.id);
            updateDisplay(firstNumber);
            console.log(`type of ${button.id}: ${typeof parseInt(button.id)}`);
            console.log(`parsed: ${parseInt(button.id)}`)
            console.log(`firstNumber: ${firstNumber}`);
        }
        else if (operation === undefined && (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷")){
            operation = button.id;
            updateDisplay(operation);
            console.log(`operation: ${operation}`);
        }
        else if (secondNumber.length <= 9 && ((typeof parseInt(button.id) === "number" && !isNaN(parseInt(button.id))) || button.id===".") && operation !== undefined){
            secondNumber += (button.id);
            updateDisplay(secondNumber);
            console.log(`secondNumber: ${secondNumber}`);
        }
    });
})