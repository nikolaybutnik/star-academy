/* eslint-disable no-unused-vars */
import React from 'react'
import beginnerIcon from '../../../../Assets/beginnerIcon.png'
import buskerIcon from '../../../../Assets/buskerIcon.png'
import localTalentIcon from '../../../../Assets/localtalentIcon.png'
import regionalTalentIcon from '../../../../Assets/regionaltalentIcon.png'
import countryIconIcon from '../../../../Assets/countryiconIcon.png'
import fireIcon from '../../../../Assets/fire-icon.png'
import { useUser } from '../../../../utils/UserContext'
import { PieChart } from 'react-minimal-pie-chart'

const ProfileUserTier = () => {
  const { user } = useUser()

  let imageSource
  switch (user.class) {
    case 'Beginner':
      imageSource = beginnerIcon
      break
    case 'Busker':
      imageSource = buskerIcon
      break
    case 'Local Talent':
      imageSource = localTalentIcon
      break
    case 'Regional Talent':
      imageSource = regionalTalentIcon
      break
    case 'Country Icon':
      imageSource = countryIconIcon
      break
    default:
      imageSource = countryIconIcon
  }

  return (
    <div className="col-md-6" style={{ padding: '0px' }}>
      <h1 className="user-level">{user ? user.class : null}</h1>
      <img
        src={imageSource}
        alt="beginner logo"
        className="user-image-profile col-md-12"
        style={{ maxWidth: '260px' }}
      />
      <h3 className="userprof-total-fans">
        Total fans: {user.totalExperience}{' '}
      </h3>
      <h3 className="userprof-streaks">
        Streak: {user.streak}{' '}
        {user.streak > 1 ? (
          <img src={fireIcon} alt="streak" className="fire-icon" />
        ) : null}
      </h3>

      <PieChart
        // label={({ dataEntry }) => 'WINS'}
        data={[
          {
            title: 'Right answers',
            value:
              user.correct === 0 && user.incorrect === 0 ? 1 : user.correct,
            color: 'rgb(30 133 246)',
          },
          {
            title: 'Wrong answers',
            value: user.incorrect,
            color: 'rgba(252, 105, 120, 0.4)',
          },
        ]}
        style={{
          height: 'auto',
          maxWidth: '220px',
          marginTop: '40px',
          marginBottom: '7px',
        }}
      />
      <div className="col-md-12">
        <div className="row" style={{ justifyContent: 'center' }}>
          <h3>WINS </h3>
          <span
            className="dot"
            style={{
              height: '25px',
              width: '25px',
              backgroundColor: 'rgb(30 133 246)',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '5px',
              marginLeft: '10px',
              marginRight: '15px',
            }}
          ></span>
          <h3>LOSSES</h3>
          <span
            className="dot"
            style={{
              height: '25px',
              width: '25px',
              backgroundColor: 'rgba(252, 105, 120, 0.4)',
              borderRadius: '50%',
              display: 'inline-block',
              margin: '5px',
              marginRight: '0px',
              marginLeft: '10px',
            }}
          ></span>
        </div>
      </div>
    </div>
  )
}

export default ProfileUserTier
