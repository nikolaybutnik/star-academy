/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

import '../UserProfile/UserProfile.css'

const HomePageButtons = () => {
  return (
    <Link to="/quiz">
      <button href="" className="btn-gradient col-md-12 blue mini quiz-btn">
        <h2 className="daily-quiz-title">GO TO QUIZ</h2>
      </button>
    </Link>
  )
}

export default HomePageButtons
