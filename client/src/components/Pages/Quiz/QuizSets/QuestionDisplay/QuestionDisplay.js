/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './QuestionDisplay.css'
import { useUser } from '../../../../../utils/UserContext'
import checkLevelUp from '../../../../../utils/checkLevelUp'
import updateUser from '../../../../../utils/updateUser'

const nextQuestion = (event, index, setIndex) => {
  event.target.style.background = 'rgb(241 241 241)'
  // Advance to the next question after one second
  setIndex(index + 1)
}

const QuestionDisplay = ({ questionState, setQuestionState }) => {
  const { user, setUser } = useUser()

  // Keep track of current question index. If the index exceeds question array length, reset everything.
  const [index, setIndex] = useState(0)
  if (index === 5) {
    setQuestionState([])
    setIndex(0)
  }

  let currentQuestion = questionState[index]

  const checkAnswer = (event) => {
    if (event.target.textContent === currentQuestion.correct) {
      // Visually notify user the answer is right
      event.target.style.background = '#97e376'
      setTimeout(() => {
        nextQuestion(event, index, setIndex)
      }, 1000)

      // Update the user object
      const updatedUser = {
        ...user,
        experience: user.experience + currentQuestion.reward,
        totalExperience: user.totalExperience + currentQuestion.reward,
        correct: user.correct + 1,
      }

      // Pass the resulting user object through a function that checks if user has levelled up.
      setUser(checkLevelUp(updatedUser))
      updatedUser(updatedUser)
    } else {
      // Visually notify user the answer is wrong
      event.target.style.background = '#e65f55'
      setTimeout(() => {
        nextQuestion(event, index, setIndex)
      }, 1000)

      // Update the user object
      const updatedUser = {
        ...user,
        incorrect: user.incorrect + 1,
      }
      setUser(updatedUser)
      updatedUser(updatedUser)
    }
  }

  return (
    <>
      {currentQuestion !== undefined ? (
        <div
          className="card"
          style={{
            width: '100%',
            margin: '5px',
            marginLeft: '0px',
            backgroundColor: 'rgb(230 247 255)',
            height: '100%',
          }}
        >
          <h5 className="card-header" style={{ fontSize: '1.75rem' }}>
            {currentQuestion.question}
          </h5>
          <ul
            className="list-group list-group-flush"
            style={{ backgroundColor: '#d2d2d2', height: '100%' }}
          >
            <li
              className="list-group-item question-list"
              onClick={(event) => checkAnswer(event)}
            >
              {currentQuestion.answers[0]}
            </li>
            <li
              className="list-group-item question-list"
              onClick={(event) => checkAnswer(event)}
            >
              {currentQuestion.answers[1]}
            </li>
            <li
              className="list-group-item question-list"
              onClick={(event) => checkAnswer(event)}
            >
              {currentQuestion.answers[2]}
            </li>
          </ul>
        </div>
      ) : null}
    </>
  )
}

export default QuestionDisplay
