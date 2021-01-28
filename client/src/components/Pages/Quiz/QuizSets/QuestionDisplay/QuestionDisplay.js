import React from 'react'
import './QuestionDisplay.css'

const QuestionDisplay = ({ quiz: { question, answers, correct } }) => {
  const checkAnswer = (event) => {
    if (event.target.textContent === correct) {
      console.log('CORRECT!')
    } else {
      console.log('WRONG!!!')
    }
  }
  return (
    <div
      className="card"
      style={{ width: '100%', margin: '5px', marginLeft: '0px' }}
    >
      <div className="card-header">Question:{question}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <button onClick={(event) => checkAnswer(event)}>{answers[0]}</button>
        </li>
        <li className="list-group-item">
          <button onClick={(event) => checkAnswer(event)}>{answers[1]}</button>
        </li>
        <li className="list-group-item">
          <button onClick={(event) => checkAnswer(event)}>{answers[2]}</button>
        </li>
      </ul>
    </div>
  )
}

export default QuestionDisplay
