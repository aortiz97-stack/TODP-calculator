import React from 'react';
import '../styles/Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  render() {
    return (<div id='display' className='internal-container'>{this.state.display}</div>);
  }
}

export default Display;