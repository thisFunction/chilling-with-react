import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <h1>Hi, I'm {this.props.name}.</h1>
                <p onClick={this.props.click}> I live in Toronto, ON and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name} type="text" />
            </Aux>
        )
    }     
}

export default Person;