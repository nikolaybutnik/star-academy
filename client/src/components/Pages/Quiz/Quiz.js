/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useUser } from '../../../utils/UserContext'
import { Redirect } from 'react-router-dom'
import './Quiz.css'

import QuestionButtons from './QuizSets/QuestionButtons/QuestionButtons'
import QuestionButtonsLocked from './QuizSets/QuestionButtonsLocked/QestionButtonsLocked'
import HomeHeader from '../../Header/QuizHeader'
import QuestionDisplay from './QuizSets/QuestionDisplay/QuestionDisplay'
import updateUser from '../../../utils/updateUser'
import { differenceInHours, differenceInMinutes } from 'date-fns'

const Quiz = () => {
  // Currently logged in user
  let { user, setUser } = useUser()

  const [questionState, setQuestionState] = useState([])

  useEffect(() => {
    // Check if user's energy needs to be topped on page render
    if (user) {
      if (user.energy.value < user.maxEnergy) {
        const now = Date.parse(new Date())
        const timestamp = Date.parse(user.energy.timestamp)
        const difference = differenceInMinutes(now, timestamp)
        console.log(difference)
        if (difference >= 1 && difference < 2) {
          user = {
            ...user,
            energy: { value: user.energy.value + 1, timestamp: new Date() },
          }
          updateUser(user)
          setUser(user)
        } else if (difference >= 2 && difference < 3) {
          user = {
            ...user,
            energy: { value: user.energy.value + 2, timestamp: new Date() },
          }
          updateUser(user)
          setUser(user)
        } else if (difference >= 3) {
          user = {
            ...user,
            energy: { value: user.energy.value + 3, timestamp: new Date() },
          }
          updateUser(user)
          setUser(user)
        }
        if (user.energy.value > user.maxEnergy) {
          user = {
            ...user,
            energy: { value: user.maxEnergy, timestamp: new Date() },
          }
          updateUser(user)
          setUser(user)
        }
      }
    }
  }, [])

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
          {user.energy.value > 0 ? (
            <QuestionButtons setQuestionState={setQuestionState} />
          ) : (
            <QuestionButtonsLocked />
          )}
        </div>
        <div
          className="col-md-6"
          style={{
            flexWrap: 'nowrap',
            marginTop: '38px',
            paddingBottom: '15px',
          }}
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
