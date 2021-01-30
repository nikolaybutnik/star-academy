/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useUser } from '../../../utils/UserContext'
import { Redirect } from 'react-router-dom'
import './Quiz.css'

import QuestionButtons from './QuizSets/QuestionButtons/QuestionButtons'
import QuestionButtonsLocked from './QuizSets/QuestionButtonsLocked/QestionButtonsLocked'
import HomeHeader from '../../Header/QuizHeader'
import QuestionDisplay from './QuizSets/QuestionDisplay/QuestionDisplay'

const Quiz = () => {
  // Currently logged in user
  const { user } = useUser()

  const [questionState, setQuestionState] = useState([])
  const [userAttempts, setUserAttempts] = useState([])

  useEffect(() => {
    // USER ATTEMPTS
    // On page render, fetch an array of user attempt history.
    // console.log(user._id)
    if (user) {
      fetch(`/getlogattempt/${user._id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserAttempts(data.data)
        })
    }
  }, [])
  console.log(userAttempts)

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <div className="home-page">
      <HomeHeader />
      <hr style={{ borderWidth: '2px' }}></hr>

      <div className="row">
        <div className="main-page-body col-md-6">
          {/* If user has no energy left, render locked buttons */}
          {user.energy > 0 ? (
            <QuestionButtons setQuestionState={setQuestionState} />
          ) : (
            <QuestionButtonsLocked />
          )}
        </div>
        <div
          className="col-md-6"
          style={{ flexWrap: 'nowrap', marginTop: '38px' }}
        >
          <QuestionDisplay
            questionState={questionState}
            setQuestionState={setQuestionState}
          />
        </div>
      </div>
    </div>
  )
}

export default Quiz
