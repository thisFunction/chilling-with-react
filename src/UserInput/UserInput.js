import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="UserInput">
        <input onChange={props.changed} value={props.name} type="text" /> 
        </div>
    );
}

export default userInput;
