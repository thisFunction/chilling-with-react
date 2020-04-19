import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'indianRed' : 'lightGreen'};
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  margin: 16px;
  color: white;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'green'};
    color: white;
  }
`;

class App extends Component {
  state = { 
    persons: [ 
      { id:'1', name: 'Adam', age: 28 }, 
      { id:'2', name: 'Bob', age: 26 }, 
      { id:'3', name: 'Nicky', age: 30 }
    ],
    showPersons: false,
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

    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red');
    }

    if (this.state.persons.length <=1) {
      classes.push('thin');
    }

    return (
        <div className="App">
          <h1 className={classes.join(' ')}>Hi! I'm a React App</h1>
          <StyledButton
            alt={this.state.showPersons ? 0 : 1}
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons
          </StyledButton>
          {persons}
        </div>
    );
  };
}

export default App;
