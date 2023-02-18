import React from 'react';
import Row from './Row';

class NumberKeypad extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(
      <div id='number-keypad' className='internal-container'>
          <Row buttonIDs={['C', '+/-', '%', '+']} classes={['light-gray', 'light-gray', 'light-gray', 'golden-yellow']}/>
          <Row buttonIDs={['7', '8', '9', 'x']} classes={['charcoal-gray', 'charcoal-gray', 'charcoal-gray', 'golden-yellow']}/>
          <Row buttonIDs={['4', '5', '6', '-']} classes={['charcoal-gray', 'charcoal-gray', 'charcoal-gray', 'golden-yellow']}/>
          <Row buttonIDs={['1','2','3','+']} classes={['charcoal-gray', 'charcoal-gray', 'charcoal-gray', 'golden-yellow']}/>
          <Row buttonIDs={['zero', '.', '=']} classes={['charcoal-gray', 'charcoal-gray', 'golden-yellow']}/>
      </div>
    );
  }
}

export default NumberKeypad;