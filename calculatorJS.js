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
    let operate = (func ==="+")? add(a,b): 
    (func ==="-")? subtract(a,b):
    (func ==="x")? multiply(a,b):
    (func==="÷")? divide(a,b): undefined;
    
    return operate;
}

function updateDisplay(newDisplay){
    let display = document.getElementById("display");
    display.textContent = newDisplay;
}

//Change #zero to #0
const zeroButton = document.getElementById("zero");
zeroButton.id = "0";
zeroButton.style.cssText = "flex: 3 0 52%; text-align:left; padding-left: 25px; border-radius: 35px;";

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", () =>{
        if (button.id ==="C"){
            updateDisplay("0");
            firstNumber = "";
            operation= undefined;
            secondNumber = "";
        }
        else if (firstNumber.length <= 9 && ((typeof parseInt(button.id) === "number" && !isNaN(parseInt(button.id))) || button.id===".") && operation===undefined){
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
        else if (button.id==="="){
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);
            console.log(`numbified firstNumber: ${firstNumber}`);
            console.log(`numbified secondNumber: ${secondNumber}`);

            let answer = operate(operation, firstNumber, secondNumber);
            updateDisplay(answer);

            firstNumber = "";
            secondNumber = "";
            operation = undefined;
        }
    });
})