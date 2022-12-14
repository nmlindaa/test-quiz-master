/**
 *  This file contains the client-side implementation of Quiz Master.
 *
 *  Feel free to extract the application elements to their own files.
 *
 *  Search for the string "TODO:" to check which parts need to be implemented
 **/

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div className="container">
      <div className="header">
        <Link to="/" className="logo">
          <h1>Quipper</h1>
        </Link>
      </div>

      <Route exact path="/" component={Quiz} />
    </div>
  </Router>
);

/* TODO: Get the question list from the API */
const questions = [{
  id: 1,
  content: "What is the capital city of Malaysia?",
  answer: "Kuala Lumpur",
},{
  id: 2,
  content: "How many letters are there in the English alphabet?",
  answer: "26",
},{
  id: 3,
  content: "Who are Snow White's friends?",
  answer: "7 dwarves",
}]

function Quiz() {
  function onSubmit() {
    /* TODO: Implement action to be taken when Submit is clicked */
  }

  function onNext() {
    /* TODO: Implement action to be taken when Next is clicked */
  }

  return (
    <div className="quiz">
      <form onSubmit={onSubmit}>

        {/* TODO: Quiz should show one question at a time */}
        <div className="quiz-item-container">
          <div className = "question-container">
            <strong className="question-title">Question</strong>
            <div className="question-content">{questions[0].content}</div>
          </div>

          <div className="answer-container">
            <strong className="answer-title">Answer</strong>
            <input className="answer-space" type="text"/>

            <div className="answer-result">
              {/* TODO: Once user submits an answer, show result on whether their answer is correct or incorrect. */}
            </div>
          </div>
        </div>

        <button type="submit" className="submit">Submit</button>
        <a href="#" className="next" onClick={onNext}>Next &gt;</a>
      </form>
    </div>
  );
}

export default App;
