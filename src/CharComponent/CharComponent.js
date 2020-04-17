import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div onClick={props.click} className="CharComponent">{props.char}</div>
    )      
}

export default charComponent;