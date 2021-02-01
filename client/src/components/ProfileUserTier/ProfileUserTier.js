/* eslint-disable no-unused-vars */
import React from 'react'
import beginnerIcon from '../../Assets/beginnerIcon.png'
import buskerIcon from '../../Assets/buskerIcon.png'
import localTalentIcon from '../../Assets/localtalentIcon.png'
import regionalTalentIcon from '../../Assets/regionaltalentIcon.png'
import countryIconIcon from '../../Assets/countryiconIcon.png'
import energyIcon from '../../Assets/bolt-128.png'
import { useUser } from '../../utils/UserContext'

const ProfileUserTier = () => {
  // Currently logged in user
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
    <div className="col-md-4" style={{ padding: '0px' }}>
      <h1 className="user-level">{user ? user.class : null}</h1>
      <img
        src={imageSource}
        alt="beginner logo"
        className="user-image-profile col-md-12"
      />
      <h3>Total fans: {user.totalExperience}</h3>
      <h3>Streak: {user.streak}</h3>
    </div>
  )
}

export default ProfileUserTier
