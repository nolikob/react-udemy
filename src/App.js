import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name: 'John', age: 20},
      {name: 'George', age: 21},
      {name: 'Tom', age: 19}
    ],
    peopleVisible: false
  }
  switchNameHandler = (newName) => {
    //console.log('clicked');
    // nemodifikovat state přímo, nebude to fungovat a react vyhodí warning
    this.setState({people: [
      {name: newName, age: 21},
      {name: 'George', age: 19},
      {name: 'Thomas', age: 21}
    ]});
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
          <Person name={this.state.people[0].name} age={this.state.people[0].age} />
          <Person 
            name={this.state.people[1].name}
            age={this.state.people[1].age} 
            click={this.switchNameHandler.bind(this, "Chorhe")}
            changeName={this.nameChangedHandler.bind(this)}
            >
            I like trains.
          </Person>
          <Person name={this.state.people[2].name} age={this.state.people[2].age} />
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
