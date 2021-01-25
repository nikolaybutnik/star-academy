import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'
import home from '../../Assets/home.png'
import UserContext from '../../utils/UserContext'

function HomeHeader() {
  // Currently logged in user
  const user = useContext(UserContext)

  return (
    <div className="homepage-header">
      <div className="col-md-11">
        <h6 className="xp-progressbar"> Fan Status</h6>
        <ProgressBar
          className="user-main-progressbar"
          animated
          now={75}
          style={{ height: '2rem' }}
        />
      </div>
      <h6 style={{ marginTop: '55px' }}>+10</h6>
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

export default HomeHeader
