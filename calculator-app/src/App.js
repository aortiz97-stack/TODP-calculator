import React from 'react';
import Display from './components/Display';
import NumberKeypad from './components/NumberKeypad';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '0',
      operation: [],
      operationNumbers: [],
      secondNumber: '',
    }
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

  render() {
    return (
      <div id='calculator-body'>
        <Display state={this.state}/>
        <NumberKeypad/>
      </div>
    );
  }
}

export default App;
