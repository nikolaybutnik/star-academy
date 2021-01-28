import React from 'react'
import './Beginner.css'
import wholeNoteIcon from '../../../../../Assets/greensingle.png'
import halfNoteIcon from '../../../../../Assets/orangedouble.png'
import eighthNoteIcon from '../../../../../Assets/redtriple.png'

import {
  beginnerEasyQuestions,
  beginnerMediumQuestions,
  beginnerHardQuestions,
} from '../../../../../utils/questions'
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay'

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
      <hr style={{ borderWidth: '2px' }}></hr>

      <h5 className="">BEGINNER</h5>
      <div className="question-cards">
        <button
          className="card questions col-md-4"
          style={{
            width: '20.5rem',
            backgroundColor: 'rgb(245 255 245)',
            borderColor: 'rgb(3 184 3)',
            borderWidth: '3px',
            margin: '10px',
            marginLeft: '-5px',
            marginRight: '0px',
          }}
          onClick={() => handleGoToQuizEasy(beginnerEasyQuestions)}
        >
          <div className="col-md-12">
            <img
              src={wholeNoteIcon}
              alt="whole note"
              className="card-title"
              style={{ height: '40px', margin: '10px' }}
            />
          </div>
          {/* <h5 className="card-title col-md-12">EASY</h5> */}
        </button>

        <button
          className="card questions col-md-4"
          style={{
            width: '20.5rem',
            backgroundColor: 'rgb(255 248 228)',
            borderColor: 'orange',
            borderWidth: '3px',
            margin: '10px',
            marginLeft: '5px',
            marginRight: '5px',
          }}
          onClick={() => handleGoToQuizMedium(beginnerMediumQuestions)}
        >
          <div className="col-md-12">
            <img
              src={halfNoteIcon}
              alt="half note"
              className="card-title"
              style={{ height: '40px', margin: '10px' }}
            />
          </div>
          {/* <h5 className="card-title col-md-12">MEDIUM</h5> */}
        </button>

        <button
          className="card questions col-md-4"
          style={{
            width: '20.5rem',
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
              style={{ height: '40px', margin: '10px' }}
            />
          </div>
          {/* <h5 className="card-title col-md-12">HARD</h5> */}
        </button>
      </div>

      <div id="EasyQuestions" className="d-flex">
        {easyBeginner.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="MediumQuestions" className="d-flex">
        {mediumBeginner.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="HardQuestions" className="d-flex">
        {hardBeginner.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
    </>
  )
}

export default Beginner
