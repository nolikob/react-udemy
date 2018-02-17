import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: "#ff9cad",
      font: "inherit",
      border: "1px solid #ff33ee",
      padding: "12px",
      cursor: "pointer"
    };
    
    // v Reactu není možné v render funkci používat blokové podmínky přímo v return metodě

    // pokud se má používat normální if/else blok, je to možné udělat takto ↓
    let persons = null;
    if (this.state.peopleVisible) {
      persons = (
        <div>
          {/* pro iteraci pers kazdy prvek ze statu people*/}
          {this.state.people.map((person, index) => {
              return (<Person 
                name={person.name}
                age={person.age} 
                click={() =>this.deletePersonHandler(index)}
                key = {person.id} // pro lepší a rychlejší zpracování změn
                changeName={(event) => this.nameChangedHandler(event, person.id) // musím použít es6 zápis metody, abych mohl metodě předat parametry 
                }
                />)
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Is it working ? </h1>
        <button style={style} onClick={this.togglePersonHandler}>Show/Hide People</button>
        {persons}
      </div>
    );
  }
}

export default App;
