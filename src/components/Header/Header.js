import React, { useEffect, useRef, useContext } from 'react';
import classes from './Header.css'
import AuthContext from '../../context/auth-context';

const header = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
      toggleButtonRef.current.click();
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
            ref={toggleButtonRef}
            className={buttonClass.join(' ')}
            alt={props.showPersons ? 0 : 1}
            onClick={props.clicked}
          >
            Toggle Persons
          </button>
          <button onClick={authContext.login}>{authContext.authenticated ? "Log out" : "Log in"}</button>
        </div>
    )
}

export default React.memo(header);