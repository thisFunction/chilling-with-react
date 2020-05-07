import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Header from '../components/Header/Header';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

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
    changeCounter: 0,
    isAuthenticated: false,
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

    this.setState((prevState, props) => {
      return {
        persons, 
        changeCounter: prevState.changeCounter + 1
      }
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  loginHandler = () => {
    const isAuth = this.state.isAuthenticated;
    this.setState({isAuthenticated: !isAuth});
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
        <Aux>
          <button onClick={() => {this.setState({showHeader: false})}}>Turn off Header</button>
          <AuthContext.Provider 
            value={{ 
              authenticated: this.state.isAuthenticated, 
              login: this.loginHandler
            }}
          >
            { this.state.showHeader ? 
              <Header 
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                clicked={this.togglePersonsHandler}
              /> : null }
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
  };
}

export default withClass(App, classes.App);
