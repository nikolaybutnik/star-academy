/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './QuestionDisplay.css'
import { useUser } from '../../../../../utils/UserContext'
import checkLevelUp from '../../../../../utils/checkLevelUp'

const QuestionDisplay = ({ quiz: { question, answers, correct, reward } }) => {
  const { user, setUser } = useUser()

  const checkAnswer = (event) => {
    if (event.target.textContent === correct) {
      console.log('CORRECT!')
      // Visually notify user the answer is wrong
      event.target.style.background = '#97e376'
      setTimeout(() => {
        event.target.style.background = 'rgb(241 241 241)'
      }, 1000)

      // Update the user object
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
      // Visually notify user the answer is wrong
      event.target.style.background = '#e65f55'
      setTimeout(() => {
        event.target.style.background = 'rgb(241 241 241)'
      }, 1000)

      // Update the user object
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
          onClick={(event) => checkAnswer(event)}
        >
          {/* <button
            onClick={(event) => checkAnswer(event)}
            style={{ backgroundColor: 'rgb(241 241 241)' }}
          >
            {answers[0]}
          </button> */}
          {answers[0]}
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: 'rgb(241 241 241)' }}
          onClick={(event) => checkAnswer(event)}
        >
          {/* <button
            onClick={(event) => checkAnswer(event)}
            style={{ backgroundColor: 'rgb(241 241 241)' }}
          >
            {answers[1]}
          </button> */}
          {answers[1]}
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: 'rgb(241 241 241)' }}
          onClick={(event) => checkAnswer(event)}
        >
          {/* <button
            onClick={(event) => checkAnswer(event)}
            style={{ backgroundColor: 'rgb(241 241 241)' }}
          >
            {answers[2]}
          </button> */}
          {answers[2]}
        </li>
      </ul>
    </div>
  )
}

export default QuestionDisplay
