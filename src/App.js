import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = { 
    persons: [ 
      { id:'1', name: 'Adam', age: 28 }, 
      { id:'2', name: 'Bob', age: 26 }, 
      { id:'3', name: 'Nicky', age: 30 }
    ],
    showPersons: false,
    inputValue: "",
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

  changeInputValue = (event) => {
    this.setState({inputValue : event.target.value}); 
  }

  removeCharAtIndex = (index) => {
    const chars = [...this.state.inputValue];
    chars.splice(index, 1);

    this.setState({ inputValue: chars.join('') });
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

    let chars;
    
    if (this.state.inputValue.length) {
      chars = (
        [...this.state.inputValue].map((char, index) => {
          return (
            <CharComponent
              key={index}
              char={char}
              click={() => this.removeCharAtIndex(index)}
            />
          )
        })
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
        <hr/>

        <input type="text" value={this.state.inputValue} onChange={(event) => this.changeInputValue(event)} />

        <p>Input length is {this.state.inputValue.length}</p>

        <ValidationComponent inputLength={this.state.inputValue.length} />
        
        {chars}
      </div>
    );
  };
}

export default App;
