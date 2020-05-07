import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <h1>Hi, I'm {this.props.name}.</h1>
                <p onClick={this.props.click}> I live in Toronto, ON and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={this.props.name} 
                    type="text" 
                />
            </Aux>
        )
    }     
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);