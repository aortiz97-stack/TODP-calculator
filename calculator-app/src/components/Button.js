import React from 'react'
import '../styles/Button.css';

class Button extends React.Component {
  constructor(props) {
      super(props);
      this.state = this.props.state;
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
       <button id={this.props.id} className={this.props.className} style={{backgroundColor: this.state.buttonColor}} onClick={this.props.handleClick}>{this.props.id}</button>
    );
    }
    return <button id={this.props.id} className={this.props.className} style={zeroStyle} onClick={e => this.buttonClick(e)}>{this.props.id}</button>
  }
}

export default Button;