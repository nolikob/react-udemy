import React, { Component } from 'react';
import myClasses from './App.css';
//import Radium, {StyleRoot} from 'radium';
import Persons from './Persons/Persons';

class App extends Component {
  state = {
    people: [
      {id: 'gds', name: 'John', age: 20},
      {id: 'grr', name: 'George', age: 21},
      {id: 'wwgd', name: 'Tom', age: 19}
    ],
    peopleVisible: false
  }

  nameChangedHandler = (event ,id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id; // hledám index prvku, který se shoduje s předaným id
    });

    const person = {
      ...this.state.people[personIndex] 
      /* ty tři tečky jsou spread operator
       doplní všechny vlastnosti či metody, které daný objekt obsahuje */
    }; 

    person.name = event.target.value; // ukládám si do proměnné hodnotu v inputu

    const people = [
      ...this.state.people
    ]; // vytvářím si nové pole prvků ze statu, abych jej mohl správně modifikovat
    people[personIndex] = person; // změním v poli na daném indexu záznam

    this.setState({people: people}); // updatuju state
  }

  togglePersonHandler = () => {
    const isVisible = this.state.peopleVisible;
    this.setState({
      peopleVisible: !isVisible
    });
  }

  deletePersonHandler = (index) => {
    // maze uzivatele ze state objektu, tento postup, který je zakomentovaný může způsobit nepředvídatelné chování aplikace
    // a proto bychom se jí měli vyhnout (nevytváříme totiž nové pole, máme jen jeho referenci)


    // const people = this.state.people; -> vždy bychom se měi vyhnout přímé změně dat přes referenci

    const people = [...this.state.people]; // vytvoříme kopii state pole people
    people.splice(index,1);
    this.setState({people: people});

  }

  render() {
    /*
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid #ff33ee",
      padding: "12px",
      cursor: "pointer",
      ':hover':{
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    */

    // v Reactu není možné v render funkci používat blokové podmínky přímo v return metodě

    // pokud se má používat normální if/else blok, je to možné udělat takto ↓
    let persons = false;

    let buttonStyle = '';
    if (this.state.peopleVisible) {
      persons = true;
      buttonStyle = myClasses.Red;
      // style.backgroundColor = "red";
      /*
        style[':hover'] = {
        backgroundColor: "purple",
        color: 'black'
        }
      */
    }
    const classes = [];

    if (this.state.people.length <= 2) {
      classes.push(myClasses.red);
    }
    if (this.state.people.length <= 1){
      classes.push(myClasses.bold);
    }

    return (
      //<StyleRoot>
        <div className={myClasses.App}>
          <h1> Is it working ? </h1>
          <p className={classes.join(' ')}>It indeed is working ;]</p>
          <button className={buttonStyle} onClick={this.togglePersonHandler}>Show/Hide People</button>
          {persons === true ? <Persons people={this.state.people} deletePerson={this.deletePersonHandler}/> : null}
        </div>
      //</StyleRoot>
    );
  }
}

export default App;// Radium(App);
