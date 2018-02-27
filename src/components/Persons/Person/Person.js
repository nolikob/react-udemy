import React, {Component} from 'react';
//import Radium from 'radium';
import myClasses from './Person.css';

class Person extends Component {
    render(){      
        const style = {
            '@media (min-width: 500px)' : {
                width: '450px'
            }
        };
        return(
            <div className={myClasses.Person} style={style}>
                <p onClick={this.props.click}>Hi, I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changeName} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;//Radium(Person);