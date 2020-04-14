import React, { Component } from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Yo! {props.name}</p>
      <p>This is the user output component</p>
    </div>
  );
}

export default userOutput;
