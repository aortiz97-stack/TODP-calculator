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

const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click", () =>{
        let textContent = button.textContent;
        let display = document.getElementById("display");
        display.textContent = textContent;
    });
})