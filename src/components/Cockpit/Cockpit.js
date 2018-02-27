import React from 'react'
import MyClasses from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];

    if (props.amountOfPeople <= 2) {
      classes.push(MyClasses.red);
    }
    if (props.amountOfPeople <= 1){
      classes.push(MyClasses.bold);
    }


        return (
            <div>
                <h1> Is it working ? </h1>
                <p className={classes.join(' ')}>It indeed is working ;]</p>
            </div>
        )
}

export default cockpit;