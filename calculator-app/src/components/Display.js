import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.updateDisplay.bind(this);
  }

  updateDisplay(newDisplay) {
    this.textContent = ' ';
    setTimeout(() => { this.textContent = newDisplay; }, 15);
  }

  render() {
    return (<div id='display' className='internal-container'>{this.state.firstNumber}</div>);
  }
}

export default Display;