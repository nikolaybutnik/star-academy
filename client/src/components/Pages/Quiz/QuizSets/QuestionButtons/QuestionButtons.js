/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './QuestionButtons.css'
import wholeNoteIcon from '../../../../../Assets/greensingle.png'
import halfNoteIcon from '../../../../../Assets/orangedouble.png'
import eighthNoteIcon from '../../../../../Assets/redtriple.png'

import { useUser } from '../../../../../utils/UserContext'
import getQuestions from '../../../../../utils/getQuestions'

const QuestionButtons = ({ setQuestionState }) => {
  const { user, setUser } = useUser()

  const handleGoToQuizEasy = () => {
    // On button click, deduct user energy
    const updatedUser = {
      ...user,
      energy: user.energy - 0,
    }
    fetch('/edituser', {
      method: 'PATCH',
      body: JSON.stringify(updatedUser),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
    setUser(updatedUser)

    const questionsBasedOnUserLevel = getQuestions('easy', user)
    setQuestionState(questionsBasedOnUserLevel)
  }

  const handleGoToQuizMedium = () => {
    // On button click, deduct user energy
    const updatedUser = {
      ...user,
      energy: user.energy - 0,
    }
    fetch('/edituser', {
      method: 'PATCH',
      body: JSON.stringify(updatedUser),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
    setUser(updatedUser)

    const questionsBasedOnUserLevel = getQuestions('medium', user)
    setQuestionState(questionsBasedOnUserLevel)
  }

  const handleGoToQuizHard = () => {
    // On button click, deduct user energy
    const updatedUser = {
      ...user,
      energy: user.energy - 0,
    }
    fetch('/edituser', {
      method: 'PATCH',
      body: JSON.stringify(updatedUser),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
    setUser(updatedUser)

    const questionsBasedOnUserLevel = getQuestions('hard', user)
    setQuestionState(questionsBasedOnUserLevel)
  }

  return (
    <>
      <h3 className="">CHOOSE A QUESTION</h3>
      {/* <div className="question-cards"> */}
      <button
        className="card questions col-md-12"
        style={{
          backgroundColor: 'rgb(221 250 221)',
          borderColor: 'rgb(3 184 3)',
          borderWidth: '3px',
          margin: '10px',
          marginRight: '0px',
          marginLeft: '0px',
        }}
        onClick={() => handleGoToQuizEasy()}
      >
        <div className="col-md-12">
          <img
            src={wholeNoteIcon}
            alt="whole note"
            className="card-title"
            style={{ height: '50px', margin: '10px' }}
          />
        </div>
        <h5 className="card-title col-md-12">EASY</h5>
      </button>

      <button
        className="card questions col-md-12"
        style={{
          backgroundColor: 'rgb(255 248 228)',
          borderColor: 'orange',
          borderWidth: '3px',
        }}
        onClick={() => handleGoToQuizMedium()}
      >
        <div className="col-md-12">
          <img
            src={halfNoteIcon}
            alt="half note"
            className="card-title"
            style={{ height: '50px', margin: '10px' }}
          />
        </div>
        <h5 className="card-title col-md-12">MEDIUM</h5>
      </button>

      <button
        className="card questions col-md-12"
        style={{
          backgroundColor: 'rgb(255 223 223)',
          borderColor: '#e90202',
          borderWidth: '3px',
          margin: '10px',
          marginLeft: '0px',
          marginRight: '0px',
        }}
        onClick={() => handleGoToQuizHard()}
      >
        <div className="col-md-12">
          <img
            src={eighthNoteIcon}
            alt="eighth note"
            className="card-title"
            style={{ height: '50px', margin: '10px' }}
          />
        </div>
        <h5 className="card-title col-md-12">HARD</h5>
      </button>
    </>
  )
}

export default QuestionButtons
