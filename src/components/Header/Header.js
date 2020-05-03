import React, { useEffect } from 'react';
import classes from './Header.css'

const header = (props) => {
    useEffect(() => {
      console.log('[Header.js useEffect]')

      const timer = setTimeout(() => {
        alert('saved data to cloud');
      }, 1000);

      return () => {
      clearTimeout(timer);
      console.log('[Header.js] clean up at work...')
      }
    }, []);

    useEffect(() => {
      console.log('[Header.js 2 useEffect]')

      return () => {
        console.log('[Header.js] clean up work in 2nd useEffect...')
      }
    });

    const assignedClasses = [];
    
    let buttonClass = [classes.Button];

    if (props.showPersons) {
      buttonClass.push(classes.Red);
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.thin);
    }

    return (
        <div className={classes.Header}>
            <h1 className={assignedClasses.join(' ')}>{props.title}</h1>
            <button
            className={buttonClass.join(' ')}
            alt={props.showPersons ? 0 : 1}
            onClick={props.clicked}
            >
            Toggle Persons
            </button>
        </div>
    )
}

export default React.memo(header);