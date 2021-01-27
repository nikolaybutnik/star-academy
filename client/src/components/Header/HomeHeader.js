import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link, useHistory } from 'react-router-dom'
import home from '../../Assets/home.png'
import { UserProvider, useUser } from '../../utils/UserContext'
import logout from '../../Assets/toppng.com-logout-icon-png-transparent-login-logout-icon-1653x1637.png'

function QuizHeader() {
  const history = useHistory()

  // Currently logged in user
  const user = useUser()

  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/')
  }

  return (
    <div className="homepage-header">
      <button
        className="col btn-gradient"
        style={{
          height: '50px',
          width: '50px',
          margin: '5px',
          marginTop: '38px',
          backgroundColor: '#fbf4f4',
          borderRadius: '15%',
        }}
        onClick={handleLogout}
      >
        <img
          src={logout}
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
        <h6 className="xp-progressbar"> Fans Until Next Tier</h6>
        <ProgressBar
          className="user-main-progressbar"
          animated
          now={40}
          label={`+${40}`}
          style={{ height: '2rem' }}
        />
      </div>
      <div className="col">
        {' '}
        <Link to="/userprofile">
          <button className="user-home-btn" href="">
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
    </div>
  )
}

export default QuizHeader
