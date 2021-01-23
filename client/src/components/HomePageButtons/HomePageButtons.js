import React from 'react'
import { Link } from 'react-router-dom'

const HomePageButtons = () => {
  return (
    <Link to="/quiz">
      <button className="user-home-btn col-md-12" href="">
        DAILY QUIZ
      </button>
    </Link>
  )
}

export default HomePageButtons
