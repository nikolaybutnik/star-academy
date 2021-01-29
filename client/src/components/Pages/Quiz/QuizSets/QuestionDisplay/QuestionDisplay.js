/* eslint-disable no-unused-vars */
import React from 'react'
import './QuestionDisplay.css'
import { useUser } from '../../../../../utils/UserContext'
import checkLevelUp from '../../../../../utils/checkLevelUp'

const QuestionDisplay = ({ quiz: { question, answers, correct, reward } }) => {
  const { user, setUser } = useUser()

  const checkAnswer = (event) => {
    if (event.target.textContent === correct) {
      console.log('CORRECT!')
      const updatedUser = {
        ...user,
        experience: user.experience + reward,
        totalExperience: user.totalExperience + reward,
        correct: user.correct + 1,
      }

      // Pass the resulting user object through a function that checks if user has levelled up.
      setUser(checkLevelUp(updatedUser))
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
      style={{
        width: '100%',
        margin: '5px',
        marginLeft: '0px',
        backgroundColor: 'rgb(230 247 255)',
      }}
    >
      <h5 className="card-header">{question}</h5>
      <ul
        className="list-group list-group-flush"
        style={{ backgroundColor: '#d2d2d2' }}
      >
        <li
          className="list-group-item"
          style={{ backgroundColor: 'rgb(241 241 241)' }}
        >
          <button
            onClick={(event) => checkAnswer(event)}
            style={{ backgroundColor: 'rgb(241 241 241)' }}
          >
            {answers[0]}
          </button>
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: 'rgb(241 241 241)' }}
        >
          <button
            onClick={(event) => checkAnswer(event)}
            style={{ backgroundColor: 'rgb(241 241 241)' }}
          >
            {answers[1]}
          </button>
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: 'rgb(241 241 241)' }}
        >
          <button
            onClick={(event) => checkAnswer(event)}
            style={{ backgroundColor: 'rgb(241 241 241)' }}
          >
            {answers[2]}
          </button>
        </li>
      </ul>
    </div>
  )
}

export default QuestionDisplay
