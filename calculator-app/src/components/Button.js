import React from 'react'
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
      super(props);
      this.state = this.props.state;
      this.buttonClick.bind(this);
  }

  updateDisplay(newDisplay) {
    this.setState({ display: ' '})
    setTimeout(() => { this.setState({display: newDisplay}) }, 15);
  }
  
  resetCalculator() {
    this.setState({
      operation: [],
      operationNumbers: [],
      secondNumber: '',
    });
  }

  add(a, b) {
    return (a * 10 + b * 10) / 10;
  }
  
  subtract(a, b) {
    return (a * 10 - b * 10) / 10;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    return a / b;
  }
  
  operate(func, a, b) {
    const operateConst = (func === '+') ? this.add(a, b)
      : (func === '-') ? this.subtract(a, b)
        : (func === 'x') ? this.multiply(a, b)
          : (func === '÷') ? this.divide(a, b) : undefined;
    return operateConst;
  }

  getNumbersOnlyLength(stringNum) {
    let finalStringNum = stringNum.toString();
    finalStringNum = finalStringNum.split('');
    const total = finalStringNum.reduce((accumulator, currentElement) => {
      if (typeof Number(currentElement) === 'number' && !Number.isNaN(Number(currentElement))) {
        return accumulator + 1;
      }
  
      return accumulator;
    }, 0);
    return total;
  }
  
  roundDecimal(answer) {
    const answerArr = answer.toString().split('.');
  
    if (answerArr.length === 1) return answer;
  
    const maxDigits = 9;
    const decimalDigitsLeft = maxDigits - this.getNumbersOnlyLength(answerArr[0]);
    const roundedNumStr = +(parseFloat(answer).toFixed(decimalDigitsLeft));
  
    let i = roundedNumStr.length - 1;
    while (i >= 0) {
      if (roundedNumStr[i] === '0') {
        roundedNumStr.pop(i);
        i = roundedNumStr.length - 1;
      } else {
        i -= 1;
        break;
      }
    }
    return parseFloat(roundedNumStr);
  }

  processOperandInput(e) {
    const id = e.target.id;

    if (this.getNumbersOnlyLength(this.state.firstNumber) <= 9 && typeof this.state.firstNumber !== 'number'
          && ((typeof Number(id) === 'number' && !Number.isNaN(Number(id))) || id === '.') && this.state.operation.length === 0) {
      if (this.state.firstNumber === '0') this.setState({firstNumber: ''});
      this.setState({firstNumber: this.state.firstNumber + id});
      this.setState({secondNumber : ''});
      this.updateDisplay(this.state.firstNumber);
    } else if ((this.state.firstNumber !== '' || this.state.secondNumber !== '')
          && (id === '+' || id === '-' || id === 'x' || id === '÷')) {
      this.setState({operation : this.state.operation.concat(id)});
    } else if (this.getNumbersOnlyLength(this.state.secondNumber) <= 9
          && ((typeof Number(id) === 'number' && !Number.isNaN(Number(id))) || id === '.') && this.state.operation.length !== 0) {
      this.setState({firstNumber : ''});
      this.setState({secondNumber : this.state.secondNumber + id});
      this.updateDisplay(this.state.secondNumber);

      if (id === '+' || id === '-' || id === 'x' || id === '÷') {
        this.setState({operationNumbers : this.operationNumbers.concat(parseFloat(this.state.secondNumber))});
        this.setState({secondNumber : ''});
      }
    }

    if (typeof this.state.firstNumber === 'number' && typeof Number(id) === 'number' && !Number.isNaN(Number(id))) {
      this.setState({firstNumber : id});
      this.updateDisplay(this.state.firstNumber);
    }
    alert(this.state.firstNumber);
  }

  processOperatorInput(e) {
    const id = e.target.id;

    if (this.state.firstNumber !== '' && (id === '+' || id === '-' || id === 'x' || id === '÷')) {
      this.setState({operationNumbers : this.state.operationNumbers.concat(parseFloat(this.state.firstNumber))});
      this.setState({firstNumber : ''});
    }

    if (this.state.secondNumber !== '' && (id === '+' || id === '-' || id === 'x' || id === '÷')) {
      this.setState({operationNumbers : this.state.operationNumbers.concat(parseFloat(this.state.secondNumber))});
      this.setState({secondNumber : ''});
    }
  }

  processEqualInput() {
    this.setState({operationNumbers : this.state.operationNumbers.concat(this.state.secondNumber)});
    let answer = this.operate(
      this.state.operation[0],
      parseFloat(this.state.operationNumbers[0]),
      parseFloat(this.state.operationNumbers[1]),
    );

    for (let i = 2; i < this.state.operationNumbers.length; i += 1) {
      answer = this.operate(this.state.operation[i - 1], answer, parseFloat(this.state.operationNumbers[i]));
    }

    answer = this.roundDecimal(answer);
    this.updateDisplay(answer);

    this.setState({firstNumber : answer});
    this.resetCalculator();
  }

  processNonOperatorInput(e) {
    const id = e.target.id;
    if (id === '=' && this.state.operationNumbers.length !== 0) {
      this.processEqualInput();
    } else if (id === '+/-') {
      if (this.state.firstNumber === '' && this.state.secondNumber !== '') {
        this.setState({secondNumber : (parseFloat(this.state.secondNumber) * -1).toString()});
        this.updateDisplay(this.state.secondNumber);
      } else if (typeof firstNumber !== 'number' && this.state.firstNumber !== '' && this.state.secondNumber === '') {
        this.setState({firstNumber : (parseFloat(this.state.firstNumber) * -1).toString()});
        this.updateDisplay(this.state.firstNumber);
      } else if (typeof firstNumber === 'number' && this.state.firstNumber !== '' && this.state.secondNumber === '') {
        this.setState({firstNumber : this.state.firstNumber * -1});
        this.updateDisplay(this.state.firstNumber);
      }
    } else if (id === '%') {
      if (this.state.firstNumber === '' && this.state.secondNumber !== '') {
        this.setState({secondNumber : ((parseFloat(this.state.secondNumber)) / 100).toString()});
        this.updateDisplay(this.state.secondNumber);
      } else if (typeof this.state.firstNumber !== 'number' && this.state.firstNumber !== '' && this.state.secondNumber === '') {
        this.setState({firstNumber : ((parseFloat(this.state.firstNumber)) / 100).toString()});
        this.updateDisplay(this.state.firstNumber);
      } else if (typeof this.state.firstNumber === 'number' && this.state.firstNumber !== '' && this.state.secondNumber === '') {
        this.setState({firstNumber : this.state.firstNumber / 100});
        this.updateDisplay(this.state.firstNumber);
      }
    } else if (id === 'C') {
      this.updateDisplay('0');
      this.setState({firstNumber : '0'});
      this.resetCalculator();
    }
  }

  buttonClick(e) {
    this.processOperandInput(e);
    this.processOperatorInput(e);
    this.processNonOperatorInput(e);
  }


  render() {
    const zeroStyle = {
      flex: '3 0 52%',
      textAlign:'left',
      paddingLeft: '25px',
      borderRadius: '35px',
      backgroundColor: this.state.buttonColor,
    };

    if (this.props.id !== '0') {
    return(
       <button id={this.props.id} className={this.props.className} style={{backgroundColor: this.state.buttonColor}} onClick={e => this.buttonClick(e)}>{this.props.id}</button>
    );
    }
    return <button id={this.props.id} className={this.props.className} style={zeroStyle} onClick={e => this.buttonClick(e)}>{this.props.id}</button>
  }
}

export default Button;