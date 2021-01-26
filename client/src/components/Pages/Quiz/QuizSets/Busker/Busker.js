import React from 'react'
import './Busker.css'
import {
  buskerEasyQuestions,
  buskerMediumQuestions,
  buskerHardQuestions,
} from '../../../../../utils/questions'
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay'

import wholeNoteIcon from '../../../../../Assets/icon2.png'
import halfNoteIcon from '../../../../../Assets/icon2 2.png'
import eighthNoteIcon from '../../../../../Assets/icon2 3.png'

const Busker = ({
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
    setEasyBeginner([])
    setMediumBeginner([])
    setHardBeginner([])
    setMediumBusker([])
    setHardBusker([])
    setEasyLocalTalent([])
    setMediumLocalTalent([])
    setHardLocalTalent([])

    // Prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * buskerEasyQuestions.length)
      const nextQuestion = buskerEasyQuestions[randNum]
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
    setEasyBusker(newArr)
  }

  const handleGoToQuizMedium = () => {
    setEasyBeginner([])
    setMediumBeginner([])
    setHardBeginner([])
    setEasyBusker([])
    setHardBusker([])
    setEasyLocalTalent([])
    setMediumLocalTalent([])
    setHardLocalTalent([])

    // Prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * buskerMediumQuestions.length)
      const nextQuestion = buskerMediumQuestions[randNum]
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
    setMediumBusker(newArr)
  }

  const handleGoToQuizHard = () => {
    setEasyBeginner([])
    setMediumBeginner([])
    setHardBeginner([])
    setEasyBusker([])
    setMediumBusker([])
    setEasyLocalTalent([])
    setMediumLocalTalent([])
    setHardLocalTalent([])

    // Prevent duplicate questions
    const newArr = []
    while (newArr.length < 5) {
      const randNum = Math.floor(Math.random() * buskerHardQuestions.length)
      const nextQuestion = buskerHardQuestions[randNum]
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
    setHardBusker(newArr)
  }

  return (
    <>
      <div className="">BUSKER</div>
      <div className="question-cards">
        <button
          className="card questions col-md-4"
          style={{
            width: '20.5rem',
            backgroundColor: 'rgb(214 250 214)',
            borderColor: 'green',
          }}
          onClick={() => handleGoToQuizEasy(buskerEasyQuestions)}
        >
          {/* <h5 className="card-title col-md-12">EASY</h5> */}
          <div className="col-md-12">
            <img
              src={wholeNoteIcon}
              alt="whole note"
              className="card-title"
              style={{ height: '40px', margin: '10px' }}
            />
          </div>
        </button>

        <button
          className="card questions col-md-4"
          style={{
            width: '20.5rem',
            backgroundColor: 'rgb(255 225 144)',
            borderColor: 'orange',
          }}
          onClick={() => handleGoToQuizMedium(buskerMediumQuestions)}
        >
          {/* <h5 className="card-title col-md-12">MEDIUM</h5> */}
          <div className="col-md-12">
            <img
              src={halfNoteIcon}
              alt="half note"
              className="card-title"
              style={{ height: '40px', margin: '10px' }}
            />
          </div>
        </button>

        <button
          className="card questions col-md-4"
          style={{
            width: '20.5rem',
            backgroundColor: 'rgb(255 131 131)',
            borderColor: 'darkred',
          }}
          onClick={() => handleGoToQuizHard(buskerHardQuestions)}
        >
          {/* <h5 className="card-title col-md-12">HARD</h5> */}
          <div className="col-md-12">
            <img
              src={eighthNoteIcon}
              alt="eighth note"
              className="card-title"
              style={{ height: '40px', margin: '10px' }}
            />
          </div>
        </button>
      </div>

      <div id="EasyQuestions" className="d-flex">
        {easyBusker.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="MediumQuestions" className="d-flex">
        {mediumBusker.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
      <div id="HardQuestions" className="d-flex">
        {hardBusker.map((question) => (
          <QuestionDisplay quiz={question} />
        ))}
      </div>
    </>
  )
}

export default Busker
