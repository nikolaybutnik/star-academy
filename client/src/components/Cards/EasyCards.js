import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
import {
  beginnerEasyQuestions,
  buskerEasyQuestions,
  localTalentEasyQuestions,
} from '../../utils/questions'

const EasyCards = () => {
  const handleGoToQuiz = () => {
    console.log(beginnerEasyQuestions)
  }
  return (
    <Link to="/quiz">
      <button
        className="card questions col-md-4"
        style={{ width: '20.5rem', backgroundColor: '#d0d0d0' }}
        onClick={handleGoToQuiz}
      >
        <h5 className="card-title col-md-12">EASY</h5>
      </button>
    </Link>
  )
}

export default EasyCards
