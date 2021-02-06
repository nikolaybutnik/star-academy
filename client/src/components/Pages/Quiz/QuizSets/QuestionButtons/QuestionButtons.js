/* eslint-disable no-unused-vars */
import React from 'react'
import './QuestionButtons.css'
import wholeNoteIcon from '../../../../../Assets/greensingle.png'
import halfNoteIcon from '../../../../../Assets/orangedouble.png'
import eighthNoteIcon from '../../../../../Assets/redtriple.png'
import { useUser } from '../../../../../utils/UserContext'
import getQuestions from '../../../../../utils/getQuestions'
import updateUser from '../../../../../utils/updateUser'

const QuestionButtons = ({ setQuestionState, setButtonsLock }) => {
  const { user, setUser } = useUser()

  const handleGoToQuiz = (difficulty) => {
    // On button click lock the buttons, deduct user energy, update + set user
    setButtonsLock(true)
    let updatedUser
    if (user.energy.value === user.maxEnergy) {
      updatedUser = {
        ...user,
        energy: {
          value: user.energy.value - 1,
          timestamp: new Date(),
        },
      }
    } else {
      updatedUser = {
        ...user,
        energy: {
          value: user.energy.value - 1,
          timestamp: user.energy.timestamp,
        },
      }
    }
    updateUser(updatedUser)
    setUser(updatedUser)

    // Select the correct questions based on user level/class
    const questionsBasedOnUserLevel = getQuestions(difficulty, user)
    setQuestionState(questionsBasedOnUserLevel)
  }

  return (
    <>
      <h3 className="">CHOOSE YOUR DIFFICULTY</h3>
      <small className="form-text text-muted">
        Answer a set of 5 questions to get new fans!
      </small>
      <button
        className="card easy-questions col-md-12"
        style={{
          backgroundColor: 'rgb(221 250 221)',
          borderColor: 'rgb(3 184 3)',
          borderWidth: '3px',
          margin: '10px',
          marginRight: '0px',
          marginLeft: '0px',
        }}
        onClick={() => handleGoToQuiz('easy')}
      >
        <div className="col-md-12">
          <img
            src={wholeNoteIcon}
            alt="whole note"
            className="card-title"
            style={{ height: '50px', margin: '10px' }}
          />
        </div>
        <h5 className="card-title col-md-12">EASY (+1 Fans)</h5>
      </button>

      <button
        className="card medium-questions col-md-12"
        style={{
          backgroundColor: 'rgb(255 248 228)',
          borderColor: 'orange',
          borderWidth: '3px',
        }}
        onClick={() => handleGoToQuiz('medium')}
      >
        <div className="col-md-12">
          <img
            src={halfNoteIcon}
            alt="half note"
            className="card-title"
            style={{ height: '50px', margin: '10px' }}
          />
        </div>
        <h5 className="card-title col-md-12">MEDIUM (+2 Fans)</h5>
      </button>

      <button
        className="card hard-questions col-md-12"
        style={{
          backgroundColor: 'rgb(252 229 229)',
          borderColor: '#e90202',
          borderWidth: '3px',
          margin: '10px',
          marginLeft: '0px',
          marginRight: '0px',
        }}
        onClick={() => handleGoToQuiz('hard')}
      >
        <div className="col-md-12">
          <img
            src={eighthNoteIcon}
            alt="eighth note"
            className="card-title"
            style={{ height: '50px', margin: '10px' }}
          />
        </div>
        <h5 className="card-title col-md-12">HARD (+3 Fans)</h5>
      </button>
    </>
  )
}

export default QuestionButtons
