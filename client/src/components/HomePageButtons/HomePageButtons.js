/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import UserProfile from '../UserProfile/UserProfile'

import '../UserProfile/UserProfile.css'

const HomePageButtons = () => {
  return (
    <Link to="/quiz">
      <button href="" className="btn-gradient col-md-11 blue mini quiz-btn">
        <h2 className="daily-quiz-title">DAILY QUIZ</h2>
      </button>
    </Link>
  )
}

export default HomePageButtons
