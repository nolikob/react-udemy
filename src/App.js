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

  nameChangedHandler = (event) => {
    this.setState({people: [
      {name: "John", age: 21},
      {name: event.target.value, age: 19},
      {name: 'Thomas', age: 21}
    ]});
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
                />)
            })}
          {/*
          <Person name={this.state.people[0].name} age={this.state.people[0].age} />
          <Person 
            name={this.state.people[1].name}
            age={this.state.people[1].age} 
            click={this.switchNameHandler.bind(this, "Chorhe")}
            changeName={this.nameChangedHandler.bind(this)}
            >
            I like trains.
          </Person>
          <Person name={this.state.people[2].name} age={this.state.people[2].age} /> */}
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
