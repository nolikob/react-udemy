import React from 'react'
import MyClasses from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let buttonStyle = '';
    
    if (props.showPeople) {
        buttonStyle = MyClasses.Red;    
    }
    if (props.amountOfPeople <= 2) {
      classes.push(MyClasses.red);
    }
    if (props.amountOfPeople <= 1){
      classes.push(MyClasses.bold);
    }

    return (
        <div className={MyClasses.cockpit}>
            <h1> Is it working ? </h1>
            <p className={classes.join(' ')}>It indeed is working ;]</p>
            <button className={buttonStyle} onClick={props.showingHandler}>Show/Hide People</button>
        </div>
    );
}

export default cockpit;