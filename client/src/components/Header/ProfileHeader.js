/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import home from '../../Assets/home.png'
import logoutIcon from '../../Assets/toppng.com-logout-icon-png-transparent-login-logout-icon-1653x1637.png'
import { useUser } from '../../utils/UserContext'
import ProgressBar from 'react-bootstrap/ProgressBar'

function ProfileHeader() {
  const { user, logout } = useUser()

  const exp = (user.experienceToNextLevel / user.experience) * 100

  return (
    <div className="homepage-header">
      <button
        className="col btn-gradient"
        style={{
          height: '50px',
          maxWidth: '50px',
          margin: '5px',
          marginTop: '38px',
          backgroundColor: '#fbf4f4',
          borderRadius: '75%',
        }}
        onClick={logout}
      >
        <img
          src={logoutIcon}
          alt="home button"
          style={{
            maxHeight: '25px',
            maxWidth: '25px',
            // opacity: "30%",
            marginBottom: '5px',
          }}
        />
      </button>
      <div className="col-md-11" style={{ paddingRight: '0px' }}>
        <h6 className="xp-progressbar">
          Lv {user.level}: {user.class} {user.username}
        </h6>
        <ProgressBar
          className="user-main-progressbar"
          animated
          now={exp}
          label={`+${exp}`}
          style={{ height: '2rem' }}
        />
      </div>
      <div className="col">
        {' '}
        <button className="user-profile-btn" href="">
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
    </div>
  )
}

export default ProfileHeader
