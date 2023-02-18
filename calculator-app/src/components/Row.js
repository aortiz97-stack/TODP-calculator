import React from 'react';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { buttonIDs, classes } = this.props;
    let finalDiv;
    if (buttonIDs.length === 4) {
        finalDiv = 
        <div className='row'>
            <button id={buttonIDs[0]} className={classes[0]}></button>
            <button id={buttonIDs[1]} className={classes[1]}></button>
            <button id={buttonIDs[2]} className={classes[2]}></button>
            <button id={buttonIDs[3]} className={classes[3]}></button>
        </div>
    } else {
        finalDiv = 
        <div className='row'>
            <button id={buttonIDs[0]} className={classes[0]}></button>
            <button id={buttonIDs[1]} className={classes[1]}></button>
            <button id={buttonIDs[2]} className={classes[2]}></button>
        </div> 
    }
    return finalDiv;
  }
}

export default(Row);