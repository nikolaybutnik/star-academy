/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useUser } from '../../../utils/UserContext'
import { Redirect } from 'react-router-dom'
import './Quiz.css'

import QuestionButtons from './QuizSets/QuestionButtons/QuestionButtons'
import QuestionButtonsLocked from './QuizSets/QuestionButtonsLocked/QestionButtonsLocked'
import HomeHeader from '../../Header/QuizHeader'
import QuestionDisplay from './QuizSets/QuestionDisplay/QuestionDisplay'
import { differenceInHours, differenceInMinutes } from 'date-fns'

const Quiz = () => {
  // Currently logged in user
  const { user, setUser } = useUser()

  const [questionState, setQuestionState] = useState([])
  // const [lastAttempt, setLastAttempt] = useState([])

  useEffect(() => {
    // USER ATTEMPTS
    // On page render, fetch an array of user attempt history.
    // store user attempt as prop of user object to avoid another db call?
    // make user energy prop an object? {value: num, lastUpdate: timestamp}
    // timestamp refers to point in time when energy was added.
    // when page loads, , get current time, check timestamp and see if the value is due
    // for an update (ex every 4 hrs), and setUser with corrent energy.
    // in user context set up an interval that runs every 4 hrs to increment user energy to max value.
    // if (user) {
    //   let lastAttempt
    //   const currentTime = Date.parse(new Date())
    //   fetch(`/getlogattempt/${user._id}`, {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       lastAttempt = Date.parse(data.data[data.data.length - 1].attemptLog)
    //       console.log(lastAttempt)
    //       console.log(currentTime)
    //       const timeDifferenceInMinutes = differenceInMinutes(
    //         currentTime,
    //         lastAttempt
    //       )
    //       if (timeDifferenceInMinutes >= 1 && user.energy < user.maxEnergy) {
    //         const updatedUser = {
    //           ...user,
    //           energy: user.energy + 1,
    //         }
    //         fetch('/edituser', {
    //           method: 'PATCH',
    //           body: JSON.stringify(updatedUser),
    //           headers: {
    //             Accept: 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json',
    //           },
    //         })
    //         setUser(updatedUser)
    //       }
    //     })
    // }
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
