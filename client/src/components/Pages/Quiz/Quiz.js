/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useUser } from '../../../utils/UserContext'
import { Redirect } from 'react-router-dom'
import './Quiz.css'

import QuestionButtons from './QuizSets/QuestionButtons/QuestionButtons'
import Busker from './QuizSets/Busker/Busker'
import LocalTalent from './QuizSets/LocalTalent/LocalTalent'
import HomeHeader from '../../Header/HomeHeader'
import QuestionDisplay from './QuizSets/QuestionDisplay/QuestionDisplay'

const Quiz = () => {
  // Currently logged in user
  const { user } = useUser()

  useEffect(() => {
    // console.log(user)
  }, [user])

  const [questionState, setQuestionState] = useState([])
  // const [mediumBeginner, setMediumBeginner] = useState([])
  // const [hardBeginner, setHardBeginner] = useState([])

  // const [easyBusker, setEasyBusker] = useState([])
  // const [mediumBusker, setMediumBusker] = useState([])
  // const [hardBusker, setHardBusker] = useState([])

  // const [easyLocalTalent, setEasyLocalTalent] = useState([])
  // const [mediumLocalTalent, setMediumLocalTalent] = useState([])
  // const [hardLocalTalent, setHardLocalTalent] = useState([])

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <div className="home-page">
      <HomeHeader />
      <hr style={{ borderWidth: '2px' }}></hr>

      <div className="row">
        <div className="main-page-body col-md-6">
          <QuestionButtons setQuestionState={setQuestionState} />
        </div>
        <div
          className="col-md-6"
          style={{ flexWrap: 'nowrap', marginTop: '38px' }}
        >
          {questionState.map((question) => (
            <QuestionDisplay quiz={question} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Quiz
