/* eslint-disable no-unused-vars */
import React from 'react'
import './QuestionDisplay.css'
import { useUser } from '../../../../../utils/UserContext'

const QuestionDisplay = ({ quiz: { question, answers, correct, reward } }) => {
  const { user, setUser } = useUser()

  const checkAnswer = (event) => {
    if (event.target.textContent === correct) {
      console.log('CORRECT!')
      const updatedUser = {
        ...user,
        experience: user.experience + reward,
        correct: user.correct + 1,
      }
      setUser(updatedUser)
      // console.log(user)
      fetch('/edituser', {
        method: 'PATCH',
        body: JSON.stringify(updatedUser),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
    } else {
      console.log('WRONG!!!')
      const updatedUser = {
        ...user,
        incorrect: user.incorrect + 1,
      }
      setUser(updatedUser)
      // console.log(user)
      fetch('/edituser', {
        method: 'PATCH',
        body: JSON.stringify(updatedUser),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
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
