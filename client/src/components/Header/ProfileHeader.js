/* eslint-disable no-unused-vars */
import React from 'react'
import home from '../../Assets/home.png'
// import logoutIcon from '../../Assets/toppng.com-logout-icon-png-transparent-login-logout-icon-1653x1637.png'
import energyIcon from '../../Assets/bolt-128.png'

import { useUser } from '../../utils/UserContext'
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../Pages/Quiz/Quiz.css'

function ProfileHeader() {
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
                  <button
                    className="user-profile-btn btn-gradient"
                    href=""
                    style={{
                      height: '50px',
                      width: '100%',
                      // margin: '5px',
                      marginTop: '10px',
                      backgroundColor: 'rgb(233 233 233)',
                      justifyContent: 'center',
                      padding: '0px',
                    }}
                  >
                    <img
                      src={home}
                      alt="home button"
                      style={{
                        maxHeight: '25px',
                        maxWidth: '25px',
                        opacity: '20%',
                      }}
                    />
                  </button>
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
              <button className="col btn-gradient logout-btn" onClick={logout}>
                LOGOUT
              </button>
            </div>
          </div>
          <div className="row progress-bar-row">
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

export default ProfileHeader
