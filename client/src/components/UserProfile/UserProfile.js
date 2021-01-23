import React, { useEffect, useState } from 'react'

import ProfileHeader from '../Header/ProfileHeader'
import Calendar from '../Calendar/Calendar'
import ProfileUserInfo from '../ProfileUserInfo/ProfileUserInfo'
import ProfileUserTier from '../ProfileUserTier/ProfileUserTier'
import HomePageButtons from '../HomePageButtons/HomePageButtons'

import './UserProfile.css'

const UserProfile = () => {
  // Currently logged in user state
  const [user, setUser] = useState()

  // Check if user has previosuly logged in when page loads.
  useEffect(() => {
    const fetchData = async () => {
      const loggedInUser = await localStorage.getItem('user')
      // console.log(loggedInUser)
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser)
        console.log(foundUser)
        setUser(foundUser)
      } else {
        console.log('No user logged in.')
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="home-page">
        <ProfileHeader user={user} />

        <div className="main-page-body">
          <div className="row">
            <ProfileUserTier />
            <div className="col-md-7">
              <ProfileUserInfo user={user} />
              <Calendar />
              <HomePageButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
