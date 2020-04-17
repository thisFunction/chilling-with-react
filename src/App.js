import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = { 
    persons: [ 
      { id:'1', name: 'Adam', age: 28 }, 
      { id:'2', name: 'Bob', age: 26 }, 
      { id:'3', name: 'Nicky', age: 30 }
    ],
    showPersons: false
  };

  deletePersonHandler = personId => {
    const persons = [...this.state.persons];

    const personIndex = this.state.persons.findIndex((person => {
      return person.id === personId;
    }));

    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    
    const personIndex = this.state.persons.findIndex((person => {
      return person.id === personId;
    }));

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    persons[personIndex] = person;
    
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({showPersons : !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '16px'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(person.id)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {persons}

      </div>
    );
  };
}

export default App;
