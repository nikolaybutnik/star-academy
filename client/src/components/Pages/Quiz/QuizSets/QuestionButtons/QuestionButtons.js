import React from 'react'
import './QuestionButtons.css'
import wholeNoteIcon from '../../../../../Assets/greensingle.png'
import halfNoteIcon from '../../../../../Assets/orangedouble.png'
import eighthNoteIcon from '../../../../../Assets/redtriple.png'

import {
  beginnerEasyQuestions,
  beginnerMediumQuestions,
  beginnerHardQuestions,
} from '../../../../../utils/questions'
// import QuestionDisplay from '../QuestionDisplay/QuestionDisplay'

const Beginner = ({
  props: {
    easyBeginner,
    setEasyBeginner,
    mediumBeginner,
    setMediumBeginner,
    hardBeginner,
    setHardBeginner,
    easyBusker,
    setEasyBusker,
    mediumBusker,
    setMediumBusker,
    hardBusker,
    setHardBusker,
    easyLocalTalent,
    setEasyLocalTalent,
    mediumLocalTalent,
    setMediumLocalTalent,
    hardLocalTalent,
    setHardLocalTalent,
  },
}) => {
  const handleGoToQuizEasy = () => {
    setMediumBeginner([])
    setHardBeginner([])
    setEasyBusker([])
    setMediumBusker([])
    setHardBusker([])
    setEasyLocalTalent([])
    setMediumLocalTalent([])
    setHardLocalTalent([])

    // Prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * beginnerEasyQuestions.length)
      const nextQuestion = beginnerEasyQuestions[randNum]
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
    setEasyBeginner(newArr)
  }

  const handleGoToQuizMedium = () => {
    setEasyBeginner([])
    setHardBeginner([])
    setEasyBusker([])
    setMediumBusker([])
    setHardBusker([])
    setEasyLocalTalent([])
    setMediumLocalTalent([])
    setHardLocalTalent([])

    // Prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * beginnerMediumQuestions.length)
      const nextQuestion = beginnerMediumQuestions[randNum]
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
    setMediumBeginner(newArr)
  }

  const handleGoToQuizHard = () => {
    setEasyBeginner([])
    setMediumBeginner([])
    setEasyBusker([])
    setMediumBusker([])
    setHardBusker([])
    setEasyLocalTalent([])
    setMediumLocalTalent([])
    setHardLocalTalent([])

    // Prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * beginnerHardQuestions.length)
      const nextQuestion = beginnerHardQuestions[randNum]
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
    setHardBeginner(newArr)
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
        onClick={() => handleGoToQuizEasy(beginnerEasyQuestions)}
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
        onClick={() => handleGoToQuizMedium(beginnerMediumQuestions)}
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
        onClick={() => handleGoToQuizHard(beginnerHardQuestions)}
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

export default Beginner
