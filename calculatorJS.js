let firstNumber = "";
let operation = [];
let secondNumber = "";
let operationNumbers = [];

//Change #zero to #0
const zeroButton = document.getElementById("zero");
zeroButton.id = "0";
zeroButton.style.cssText = "flex: 3 0 52%; text-align:left; padding-left: 25px; border-radius: 35px;";


function add(a, b){
    return (a*10 + b*10)/10;
}

function subtract(a, b){
    return (a*10 - b*10)/10;
}

function multiply(a,b){
    return a * b;
}

function divide(a, b){
    return a / b
}

function operate(func, a, b){
    const operate = (func ==="+")? add(a,b): 
    (func ==="-")? subtract(a,b):
    (func ==="x")? multiply(a,b):
    (func==="÷")? divide(a,b): undefined;
    return operate;
}

function updateDisplay(newDisplay){
    const display = document.getElementById("display");
    display.textContent = " ";
    setTimeout(()=>{display.textContent = newDisplay}, 15);
}

function roundDecimal(answer){
    const answerArr = answer.toString().split(".")

    if (answerArr.length===1) return answer;
    else{
        const maxDigits = 9;
        const decimalDigitsLeft = maxDigits - getNumbersOnlyLength(answerArr[0]);
        const roundedNumStr = +(parseFloat(answer).toFixed(decimalDigitsLeft));

        let i = roundedNumStr.length - 1;
        while (i >= 0){
            if (roundedNumStr[i]==="0"){
                roundedNumStr.pop(i);
                i = roundedNumStr.length-1;
            }
            else{
                i--;
                break;
            }
        }
        return parseFloat(roundedNumStr);
    }
}

function getNumbersOnlyLength(stringNum){
    stringNum = stringNum.toString();
    stringNum = stringNum.split("");
    const total = stringNum.reduce((accumulator, currentElement) => {
        if (typeof parseInt(currentElement) ==="number" && !isNaN(parseInt(currentElement))) {
            return accumulator + 1;
        }
        else{
            return accumulator;
        }
    }, 0);
    return total;   
}

function resetCalculator(){
    operation = [];
    secondNumber = "";
    operationNumbers = [];
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> {
    button.addEventListener("click", () =>{
        function processOperandInput(){
            if (getNumbersOnlyLength(firstNumber) <= 9 && typeof firstNumber !== 'number' && 
            ((typeof parseInt(button.id) === "number" && !isNaN(parseInt(button.id))) || button.id===".") && operation.length===0){
                firstNumber += (button.id);
                secondNumber = "";
                updateDisplay(firstNumber);
            }
            else if ((firstNumber !== "" || secondNumber != "") && 
            (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷")){
                operation.push(button.id);
            }    
            else if (getNumbersOnlyLength(secondNumber) <= 9 && 
            ((typeof parseInt(button.id) === "number" && !isNaN(parseInt(button.id))) || button.id===".") && operation.length !== 0){
                firstNumber = "";
                secondNumber += (button.id);
                updateDisplay(secondNumber);
    
                if (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷"){
                    operationNumbers.push(parseFloat(secondNumber));
                    secondNumber = "";
                }
            }

            if (typeof firstNumber === "number" && typeof parseInt(button.id) ==="number" && !isNaN(parseInt(button.id))){
                firstNumber = button.id;
                updateDisplay(firstNumber);
            }
        }
    
        function processOperatorInput(){
            if (firstNumber !== "" && (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷")){
                operationNumbers.push(parseFloat(firstNumber));
                firstNumber = "";
            }
    
            if (secondNumber != "" && (button.id === "+" || button.id === "-" || button.id === "x" || button.id === "÷")){
                operationNumbers.push(parseFloat(secondNumber));
                secondNumber = "";
            }
        }

        function processNonOperatorInput(){
            if (button.id==="=" && operationNumbers.length !== 0){
                processEqualInput();
            }
            else if (button.id==="+/-"){
                if (firstNumber === "" && secondNumber !== ""){
                    secondNumber = (parseFloat(secondNumber) * -1).toString();
                    updateDisplay(secondNumber);
                }
                else if (typeof firstNumber !== "number" && firstNumber !=="" && secondNumber ===""){
                    firstNumber = (parseFloat(firstNumber) * -1).toString();
                    updateDisplay(firstNumber);
                }
                else if (typeof firstNumber === "number" && firstNumber !=="" && secondNumber ===""){
                    firstNumber *= -1;
                    updateDisplay(firstNumber);
                }
            }
            else if (button.id==="%"){
                if (firstNumber === "" && secondNumber !== ""){
                    secondNumber = ((parseFloat(secondNumber))/100).toString();
                    updateDisplay(secondNumber);
                }
                else if (typeof firstNumber !== "number" && firstNumber !=="" && secondNumber ===""){
                    firstNumber = ((parseFloat(firstNumber))/100).toString();
                    updateDisplay(firstNumber);
                }
                else if (typeof firstNumber === "number" && firstNumber !=="" && secondNumber ===""){
                    firstNumber /= 100;
                    updateDisplay(firstNumber);
                }
            }
            else if (button.id ==="C"){
                updateDisplay("0");
                firstNumber = "";
                resetCalculator();
            }
        }

        function processEqualInput(){
            operationNumbers.push(secondNumber);          
            let answer = operate(operation[0], parseFloat(operationNumbers[0]), parseFloat(operationNumbers[1]));
        
            for (let i = 2; i < operationNumbers.length; i++){
                answer = operate(operation[i-1], answer, parseFloat(operationNumbers[i]));
            } 
        
            answer = roundDecimal(answer);
            updateDisplay(answer);
        
            firstNumber = answer;
            resetCalculator();
        }

        function buttonColorChange(color){
            button.style.backgroundColor = color;
        }

        let originalColor = button.style.backgroundColor;
        
        buttonColorChange("white");
        processOperandInput();
        processOperatorInput();
        processNonOperatorInput();
        setTimeout(()=>{buttonColorChange(originalColor)}, 100);
    });
})