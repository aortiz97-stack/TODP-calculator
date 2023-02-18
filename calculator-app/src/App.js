import React from 'react';
import Display from './components/Display';
import NumberKeypad from './components/NumberKeypad';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber : '0',
      operation : [],
      operationNumbers : [],
      secondNumber : '',
      display : '0',
    }
  }
  

  render() {
    return (
      <div id='calculator-body'>
        <Display state={this.state}/>
        <NumberKeypad state={this.state}/>
      </div>
    );
  }
}

export default App;
