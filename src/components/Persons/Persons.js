import React from 'react';
import Person from './Person/Person'

class Persons extends React.Component {
    render(){
        return(
            <div>
                {/* pro iteraci pers kazdy prvek ze statu people*/}
                {this.props.people.map((person, index) => {
                    return (
                    <Person 
                        name={person.name}
                        age={person.age} 
                        click={() =>this.props.deletePerson(index)}
                        key = {person.id} // pro lepší a rychlejší zpracování změn
                        changeName={(event) => this.props.changeName(event, person.id) // musím použít es6 zápis metody, abych mohl metodě předat parametry 
                        }
                    />)
                })}
            </div>
        );
    }
}

export default Persons;