/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './QuestionButtons.css'
import wholeNoteIcon from '../../../../../Assets/greensingle.png'
import halfNoteIcon from '../../../../../Assets/orangedouble.png'
import eighthNoteIcon from '../../../../../Assets/redtriple.png'

import { useUser } from '../../../../../utils/UserContext'

import { beginnerEasyQuestions } from '../../../../../utils/QuestionSets/Beginner/beginnerEasyQ'
import { beginnerMediumQuestions } from '../../../../../utils/QuestionSets/Beginner/beginnerMediumQ'
import { beginnerHardQuestions } from '../../../../../utils/QuestionSets/Beginner/beginnerHardQ'
import { buskerEasyQuestions } from '../../../../../utils/QuestionSets/Busker/buskerEasyQ'
import { buskerMediumQuestions } from '../../../../../utils/QuestionSets/Busker/buskerMediumQ'
import { buskerHardQuestions } from '../../../../../utils/QuestionSets/Busker/buskerHardQ'
import { localTalentEasyQuestions } from '../../../../../utils/QuestionSets/LocalTalent/localTalentEasyQ'
import { localTalentMediumQuestions } from '../../../../../utils/QuestionSets/LocalTalent/localTalentMediumQ'
import { localTalentHardQuestions } from '../../../../../utils/QuestionSets/LocalTalent/localTalentHardQ'
// import QuestionDisplay from '../QuestionDisplay/QuestionDisplay'

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

    // Choose the appropriate question set based on user level/class
    let questionSet = []
    switch (user.class) {
      case 'Beginner':
        questionSet = beginnerEasyQuestions
        break
      case 'Busker':
        questionSet = buskerEasyQuestions
        break
      case 'Local Talent':
        questionSet = localTalentEasyQuestions
        break
      default:
        questionSet = localTalentEasyQuestions
    }
    // Make new questionb array and prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * questionSet.length)
      const nextQuestion = questionSet[randNum]
      if (
        newArr
          .map((q) => {
            return q.id
          })
          .includes(nextQuestion.id)
      ) {
        continue
      }
      newArr.push(nextQuestion)
    }
    setQuestionState(newArr)
  }

  const handleGoToQuizMedium = () => {
    let questionSet = []
    switch (user.class) {
      case 'Beginner':
        questionSet = beginnerMediumQuestions
        break
      case 'Busker':
        questionSet = buskerMediumQuestions
        break
      case 'Local Talent':
        questionSet = localTalentMediumQuestions
        break
      default:
        questionSet = localTalentMediumQuestions
    }
    // Make new questionb array and prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * questionSet.length)
      const nextQuestion = questionSet[randNum]
      if (
        newArr
          .map((q) => {
            return q.id
          })
          .includes(nextQuestion.id)
      ) {
        continue
      }
      newArr.push(nextQuestion)
    }
    setQuestionState(newArr)
  }

  const handleGoToQuizHard = () => {
    let questionSet = []
    switch (user.class) {
      case 'Beginner':
        questionSet = beginnerHardQuestions
        break
      case 'Busker':
        questionSet = buskerHardQuestions
        break
      case 'Local Talent':
        questionSet = localTalentHardQuestions
        break
      default:
        questionSet = localTalentHardQuestions
    }
    // Make new questionb array and prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * questionSet.length)
      const nextQuestion = questionSet[randNum]
      if (
        newArr
          .map((q) => {
            return q.id
          })
          .includes(nextQuestion.id)
      ) {
        continue
      }
      newArr.push(nextQuestion)
    }
    setQuestionState(newArr)
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
