import React from 'react';
import Button from './Button';
import '../styles/Row.css';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }
  
  render() {
    const { buttonIDs, classes } = this.props;
    let finalDiv;
    if (buttonIDs.length === 4) {
        finalDiv = 
        <div className='row'>
            <Button id={buttonIDs[0]} className={classes[0]} state={this.state} handleClick={this.buttonClick}>{buttonIDs[0]}</Button>
            <Button id={buttonIDs[1]} className={classes[1]} state={this.state} handleClick={this.buttonClick}>{buttonIDs[1]}</Button>
            <Button id={buttonIDs[2]} className={classes[2]} state={this.state} handleClick={this.buttonClick}>{buttonIDs[2]}</Button>
            <Button id={buttonIDs[3]} className={classes[3]} state={this.state} handleClick={this.buttonClick}>{buttonIDs[3]}</Button>
        </div>
    } else {
      const zeroStyle = {
        flex: '3 0 52%',
        textAlign:'left',
        paddingLeft: '25px',
        borderRadius: '35px',
      };
        finalDiv = 
        <div className='row'>
            <Button id={buttonIDs[0]} className={classes[0]} style={zeroStyle} state={this.state} handleClick={this.buttonClick}>{buttonIDs[0]}</Button>
            <Button id={buttonIDs[1]} className={classes[1]} state={this.state} handleClick={this.buttonClick}>{buttonIDs[1]}</Button>
            <Button id={buttonIDs[2]} className={classes[2]} state={this.state} handleClick={this.buttonClick}>{buttonIDs[2]}</Button>
        </div> 
    }
    return finalDiv;
  }
}

export default(Row);