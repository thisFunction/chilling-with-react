import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Header from '../components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = { 
    persons: [ 
      { id:'1', name: 'Adam', age: 28 }, 
      { id:'2', name: 'Bob', age: 26 }, 
      { id:'3', name: 'Nicky', age: 30 }
    ],
    showPersons: false,
    showHeader: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] componentDidUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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
    console.log('[App.js] render');
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler} 
          />
      )
    }

    return (
        <div className={classes.App}>
          <button onClick={() => {this.setState({showHeader: false})}}>Turn off Header</button>
          { this.state.showHeader ? 
            <Header 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            /> : null }
          {persons}
        </div>
    );
  };
}

export default App;
