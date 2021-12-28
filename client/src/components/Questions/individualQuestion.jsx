import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';

import Answers from './answers.jsx';


const IndividualQuestion = (props) => {
  return (
    <div style={{ maxHeight: "20vh", overflow: "scroll" }}>
      <div style={{ border: "solid" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          Q: {props.question.question_body}
          <span style={{ marginLeft: "auto" }}>Helpful? Yes(num) | Add Answer </span>
        </div>
        <Answers question_id={props.question.questions_id} answer={props.question.answers}/>
      </div>
    </div>
  )
}

export default IndividualQuestion

/*
Need to fix answer list for each answer - possibly component
*/