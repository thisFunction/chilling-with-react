import React from 'react';

const validationComponent = (props) => {
    const validation =  props.inputLength < 5 
        ? "Text too short" 
        : "Text long enough";

    return (
        <p>{validation}</p>
    )      
}

export default validationComponent;