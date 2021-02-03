/* eslint-disable no-unused-vars */
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'
import home from '../../Assets/home.png'
import { useUser } from '../../utils/UserContext'
import energyIcon from '../../Assets/bolt-128.png'
import '../Pages/Quiz/Quiz.css'

function QuizHeader() {
  // Currently logged in user
  const { user, logout } = useUser()

  const exp = (user.experience / user.experienceToNextLevel) * 100

  return (
    <div className="homepage-header">
      <div className="row col-md-12 header-row">
        <h2
          className="row col-md-12 bandname-header"
          style={{ justifyContent: 'center' }}
        >
          {user.username}
        </h2>
        <div
          className="col-md-12"
          style={{ paddingRight: '0px', paddingLeft: '0px' }}
        >
          <div className="row" style={{ flexWrap: 'nowrap' }}>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-6">
                  <Link to="/userprofile">
                    <button className="user-home-btn btn-gradient" href="">
                      <img
                        src={home}
                        alt="home icon"
                        style={{
                          maxHeight: '25px',
                          maxWidth: '25px',
                        }}
                      ></img>
                    </button>
                  </Link>
                </div>
                <div className="col-md-6" style={{ flexWrap: 'nowrap' }}>
                  <div className="row" style={{ flexWrap: 'nowrap' }}>
                    <img className="energy-icon" src={energyIcon} alt="logo" />
                    <span className="energy-section">
                      {user ? user.energy.value + '/' + user.maxEnergy : null}
                    </span>
                    <div className="energy-title">ENERGY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ paddingLeft: '0px' }}>
              <h5 className="xp-progressbar">
                Lv {user.level}: {user.class}
              </h5>
            </div>
            <div className="col-md-3  header-btn-column">
              <button
                className="col btn-gradient logout-btn"
                style={{}}
                onClick={logout}
              >
                LOGOUT
              </button>
            </div>
          </div>
          <div className="row">
            <ProgressBar
              className="user-main-progressbar"
              animated
              now={exp === Infinity ? 0 : Math.floor(exp)}
              label={`${
                user.experienceToNextLevel - user.experience
              } fans until next level`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizHeader
