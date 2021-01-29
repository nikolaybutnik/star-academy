import React from 'react'
import './QuestionButtons.css'

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
      <hr style={{ borderWidth: '2px' }}></hr>

      <hr style={{ borderWidth: '2px' }}></hr>
    </>
  )
}

export default Beginner
