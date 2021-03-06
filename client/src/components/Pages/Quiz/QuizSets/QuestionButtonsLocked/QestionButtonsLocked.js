/* eslint-disable no-unused-vars */
import React from 'react'
import './QuestionButtonsLocked.css'

import lockIconGreen from '../../../../../Assets/lock-icon-green.png'
import lockIconOrange from '../../../../../Assets/lock-icon-orange.png'
import lockIconRed from '../../../../../Assets/lock-icon-red.png'

const QuestionButtonsLocked = () => {
  return (
    <>
      <h3 className="">OUT OF ENERGY</h3>
      <small className="form-text text-muted">
        1 energy recovers every 2 hours, take a break!
      </small>
      <button className="card questions col-md-12 easy-lock-card">
        <div className="col-md-12">
          <img src={lockIconGreen} alt="whole note" className="lock-icon" />
        </div>
      </button>

      <button className="card questions col-md-12 medium-lock-card">
        <div className="col-md-12">
          <img src={lockIconOrange} alt="whole note" className="lock-icon" />
        </div>
      </button>

      <button className="card questions col-md-12 hard-lock-card">
        <div className="col-md-12">
          <img src={lockIconRed} alt="whole note" className="lock-icon" />
        </div>
      </button>
    </>
  )
}

export default QuestionButtonsLocked
