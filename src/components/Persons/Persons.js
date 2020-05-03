import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return nextProps.persons !== this.props.persons 
    //         || nextProps.changed !== this.props.changed 
    //         || nextProps.clicked !== this.props.clicked;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot)
        console.log('[Persons.js] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person) => {
            return (    
                <Person
                    key={person.id}
                    click={() => this.props.clicked(person.id)}
                    name={person.name} 
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        }); 
    }
};

export default Persons;