import React from 'react';
import './Person.css'

const person = (props) => {
    console.log(props);
    return (
        <div className="Person">
            <h1>Hi, I'm {props.name}.</h1>
            <p onClick={props.click}> I live in Toronto, ON and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            
            <input onChange={props.changed} value={props.name} type="text" />
        </div>  
    )      
}

export default person;