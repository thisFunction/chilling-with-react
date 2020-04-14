import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = { 
    persons: [ 
      {name: 'Adam', age: 28}, 
      {name: 'Bob', age: 26}, 
      {name: 'Nicky', age: 30}
    ],
    user: {
      name: 'Fred'
    }
  };

  switchNameHandler = (newName) => {
    this.setState({   
      persons: [ 
        {name: newName, age: 35}, 
        {name: 'Bob', age: 26}, 
        {name: 'Stephanie', age: 30}
      ] 
    });
  }

  nameChangedHandler = (event) => {
    this.setState({   
      persons: [ 
        {name: event.target.value, age: 35}, 
        {name: 'Bob', age: 26}, 
        {name: 'Stephanie', age: 30}
      ] 
    });
  }

  userChangeHandle = (event) => {
    this.setState({ 
      user: {
        name: event.target.value
      }
    });
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

    return (
      <div className="App">
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Ziom')}>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler('Max')}
          changed={this.nameChangedHandler}
          >
            My hobbies: Racing
          </Person> 
          <UserInput changed={this.userChangeHandle} name={this.state.user.name}/>
          <UserOutput name={this.state.user.name}/>
          <UserOutput name={this.state.user.name}/>
          <UserOutput name={this.state.user.name}/>
      </div>
    );
  };
}

export default App;
