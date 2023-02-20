import React from 'react';
import Row from './Row';
import '../styles/NumberKeypad.css';

class NumberKeypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    
  }

  render() {
    return(
      <div id='number-keypad' className='internal-container'>
          <Row buttonIDs={['C', '+/-', '%', '+']} classes={['light-gray', 'light-gray', 'light-gray', 'golden-yellow']} state={this.state} handleClick={this.props.handleClick}/>
          <Row buttonIDs={['7', '8', '9', 'x']} classes={['charcoal-gray', 'charcoal-gray', 'charcoal-gray', 'golden-yellow']} state={this.state} handleClick={this.props.handleClick}/>
          <Row buttonIDs={['4', '5', '6', '-']} classes={['charcoal-gray', 'charcoal-gray', 'charcoal-gray', 'golden-yellow']} state={this.state} handleClick={this.props.handleClick}/>
          <Row buttonIDs={['1','2','3','+']} classes={['charcoal-gray', 'charcoal-gray', 'charcoal-gray', 'golden-yellow']} state={this.state} handleClick={this.props.handleClick}/>
          <Row buttonIDs={['0', '.', '=']} classes={['charcoal-gray', 'charcoal-gray', 'golden-yellow']} state={this.state} handleClick={this.props.handleClick}/>
      </div>
    );
  }
}

export default NumberKeypad;