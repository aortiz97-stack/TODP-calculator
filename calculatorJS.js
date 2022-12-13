let firstNumber = "";
let operation = [];
let secondNumber = "";
let operationNumbers = [];

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
            operation= [];
            secondNumber = "";
            operationNumbers = [];
        }
        else if (firstNumber.length <= 9 && typeof firstNumber !== 'number' && ((typeof parseInt(button.id) === "number" && !isNaN(parseInt(button.id))) || button.id===".") && operation.length===0){
            firstNumber += (button.id);
            secondNumber = "";
            updateDisplay(firstNumber);
        }
        else if ((firstNumber !== "" || secondNumber != "") && (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷")){
            operation.push(button.id);
        }
        
        else if (secondNumber.length <= 9 && ((typeof parseInt(button.id) === "number" && !isNaN(parseInt(button.id))) || button.id===".") && operation.length !== 0){
            firstNumber = "";
            secondNumber += (button.id);
            updateDisplay(secondNumber);
            if (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷"){
                operationNumbers.push(parseFloat(secondNumber));
                secondNumber = "";
            }
        }

        if (firstNumber != "" && (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷")){
            operationNumbers.push(parseFloat(firstNumber));
            firstNumber = "";
        }

        if (secondNumber != "" && (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷")){
            operationNumbers.push(parseFloat(secondNumber));
            secondNumber = "";
        }
        console.log(`button id: ${button.id}`);
        console.log(`firstNumber: ${firstNumber}`);
        console.log(`secondNumber: ${secondNumber}`);
        console.log(`operationNumbers: ${operationNumbers}`);
        console.log(`operations: ${operation}`);
        console.log("____________")
        
        if (button.id==="=" && operationNumbers.length !== 0){
            
            operationNumbers.push(secondNumber);
            console.log(`operationNumbers equals: ${operationNumbers}`)

            let answer = operate(operation[0], parseFloat(operationNumbers[0]), parseFloat(operationNumbers[1]));

            for (let i = 2; i < operationNumbers.length; i++){
                console.log(`answer is ${answer}`);
                answer = operate(operation[i-1], answer, parseFloat(operationNumbers[i]));
            } 

            console.log(`Answer: ${answer}`);

            updateDisplay(answer);

            firstNumber = answer;
            secondNumber = "";
            operation = [];
            operationNumbers = [];
        }
    });
})