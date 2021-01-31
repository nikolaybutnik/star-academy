/* eslint-disable no-unused-vars */
import React from 'react'
import beginnerIcon from '../../Assets/beginnerIcon.png'
import buskerIcon from '../../Assets/buskerIcon.png'
import localTalentIcon from '../../Assets/localtalentIcon.png'
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
    default:
      imageSource = localTalentIcon
  }

  return (
    <div className="col-md-4" style={{ padding: '0px' }}>
      <h1 className="user-level">{user ? user.class : null}</h1>
      <img
        src={imageSource}
        alt="beginner logo"
        className="user-image-profile col-md-12"
      />
      <h2>Total fans: {user.totalExperience}</h2>
    </div>
  )
}

export default ProfileUserTier
