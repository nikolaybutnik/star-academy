/* eslint-disable no-unused-vars */
import React from 'react'
import home from '../../Assets/home.png'
// import logoutIcon from '../../Assets/toppng.com-logout-icon-png-transparent-login-logout-icon-1653x1637.png'
import energyIcon from '../../Assets/bolt-128.png'

import { useUser } from '../../utils/UserContext'
import ProgressBar from 'react-bootstrap/ProgressBar'

function ProfileHeader() {
  const { user, logout } = useUser()

  const exp = (user.experience / user.experienceToNextLevel) * 100

  return (
    <div className="homepage-header">
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
                  <img
                    src={energyIcon}
                    alt="logo"
                    style={{
                      height: '30px',
                      marginTop: '18px',
                      marginBottom: '18px',
                      paddingLeft: '5px',
                    }}
                  />
                  <span
                    style={{
                      marginLeft: '0px',
                      marginRight: '5px',
                      marginTop: '20px',
                      color: '#42bffb',
                    }}
                  >
                    {user ? user.energy.value + '/' + user.maxEnergy : null}
                  </span>
                  <h9
                    className="energy-title"
                    style={{ fontSize: '15px', marginTop: '20px' }}
                  >
                    ENERGY
                  </h9>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ paddingLeft: '0px' }}>
            <h3 style={{ marginTop: '10px' }}>
              {user.username}{' '}
              <h5 className="xp-progressbar" style={{ marginBottom: '5px' }}>
                Lv {user.level}: {user.class}
              </h5>
            </h3>
          </div>
          <div className="col-md-3">
            <button
              className="col btn-gradient"
              style={{
                height: '50px',
                maxWidth: '150px',
                marginTop: '10px',
                backgroundColor: 'rgb(233 233 233)',
                color: 'black',
                float: 'right',
              }}
              onClick={logout}
            >
              LOGOUT
            </button>
          </div>
        </div>
        <ProgressBar
          className="user-main-progressbar"
          animated
          now={exp === Infinity ? 0 : Math.floor(exp)}
          label={`${
            user.experienceToNextLevel - user.experience
          } fans until next level`}
          style={{ height: '2rem' }}
        />
      </div>
    </div>
  )
}

export default ProfileHeader
