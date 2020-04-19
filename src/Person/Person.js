import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`
const person = (props) => {
    return (
        <StyledDiv>
            <h1>Hi, I'm {props.name}.</h1>
            <p onClick={props.click}> I live in Toronto, ON and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            
            <input onChange={props.changed} value={props.name} type="text" />
        </StyledDiv>
    )      
}

export default person;