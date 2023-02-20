import React, { useState } from "react";
import "./styles/App.css";

let isSecondNumber;
let isResult;
function App() {
  const [display, setDisplay] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number) => {
    if ((display === "0" || isResult) && number !== "." && operator === "") {
      setDisplay(number);
    } else if ((operator !== "" && number !== "." && !isSecondNumber)) {
      isSecondNumber = true;
      
      setDisplay("")
      setDisplay(number);
    } else if (number === "." && display.includes(".")) {
      return;
    } else if (operator === "" && isResult) {
      setDisplay(display);
    } else {
      setDisplay(display + number);
    }

    if ((operator !== "" && isSecondNumber)) {
      setCurrentOperand(currentOperand + number);
    } else if (isResult) {
      setCurrentOperand(number);
      isResult = false;
    } else if (operator === "" && !isResult) {
      setCurrentOperand(currentOperand + number)
    } else if (operator === "" && !isSecondNumber) {
      setCurrentOperand(currentOperand + number);
    } else {
      setCurrentOperand(number);
    }
  };

  const handleOperatorClick = (newOperator) => {
    if (currentOperand === "") return;
    if (previousOperand !== "" && currentOperand !== "") {
      handleEqualsClick();
    }
    setOperator(newOperator);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const handleEqualsClick = () => {
    if (previousOperand === "" || currentOperand === "") return;

    let result;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    console.log(`previous ${previous}`);
    console.log(`current operand ${currentOperand}`);
    console.log(`current ${current}`);

    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "x":
        result = previous * current;
        break;
      case "÷":
        result = previous / current;
        break;
      default:
        return;
    }
    let finalDisplay = result.toFixed(9).replace(/0+$/,'').toString();
    if (finalDisplay[finalDisplay.length - 1] === ".") finalDisplay = finalDisplay.slice(0, finalDisplay.length - 1);
    setDisplay(finalDisplay);
    setPreviousOperand("");
    setCurrentOperand(result.toString());
    setOperator("");

    isSecondNumber = false;
    isResult = true;
  };

  const handleClearClick = () => {
    setDisplay("0");
    setPreviousOperand("");
    setCurrentOperand("");
    setOperator("");
  };

  const handlePlusMinusClick = () => {
    if (currentOperand === "") return;

    if (currentOperand.startsWith("-")) {
      setDisplay(display.substring(1));
      setCurrentOperand(currentOperand.substring(1));
    } else {
      setDisplay("-" + display);
      setCurrentOperand("-" + currentOperand);
    }
  };

  const handlePercentageClick = () => {
    if (currentOperand === "") return;

    const value = parseFloat(currentOperand) / 100;
    setDisplay(value.toString());
    setCurrentOperand(value.toString());
  };

  const zeroStyle = {
    flex: '3 0 52%',
    textAlign:'left',
    paddingLeft: '25px',
    borderRadius: '35px',
    border: '#232323',
  }

  return (
    <div id="calculator-body">
      <div id="display" className="internal-container">
        {display}
      </div>
      <div id="number-keypad" className="internal-container">
        <div className="row">
          <button id="C" className="light-gray" onClick={handleClearClick}>C</button>
          <button id="+/-" className="light-gray" onClick={handlePlusMinusClick}>+/-</button>
          <button id="%" className="light-gray" onClick={handlePercentageClick}>%</button>
          <button id="÷" className="golden-yellow" onClick={() => handleOperatorClick("÷")}>÷</button>
        </div>
      <div className="row">
          <button id="7" className="charcoal-gray" onClick={() => handleNumberClick("7")}>7</button>
          <button id="8" className="charcoal-gray" onClick={() => handleNumberClick("8")}>8</button>
          <button id="9" className="charcoal-gray" onClick={() => handleNumberClick("9")}>9</button>
          <button id="x" className="golden-yellow" onClick={()=> handleOperatorClick("x")}>x</button>
      </div>
      <div className="row">
          <button id="4" className="charcoal-gray" onClick={() => handleNumberClick("4")}>4</button>
          <button id="5" className="charcoal-gray" onClick={() => handleNumberClick("5")}>5</button>
          <button id="6" className="charcoal-gray" onClick={() => handleNumberClick("6")}>6</button>
          <button id="-" className="golden-yellow" onClick={() => handleOperatorClick("-")}>-</button>
      </div>
      <div className="row">
          <button id="1" className="charcoal-gray" onClick={() => handleNumberClick("1")}>1</button>
          <button id="2" className="charcoal-gray" onClick={() => handleNumberClick("2")}>2</button>
          <button id="3" className="charcoal-gray" onClick={() => handleNumberClick("3")}>3</button>
          <button id="+" className="golden-yellow" onClick={() => handleOperatorClick("+")}>+</button>
      </div>
      <div className="row">
          <button id="0" className="charcoal-gray" onClick={() => handleNumberClick("0")} style={zeroStyle}>0</button>
          <button id="." className="charcoal-gray" onClick={() => handleNumberClick(".")}>.</button>
          <button id="=" className="golden-yellow" onClick={() => handleEqualsClick("=")}>=</button>
      </div>
    </div>
    </div>);
    }

export default App;
