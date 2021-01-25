import React, { useEffect, useState, useContext } from 'react'

import ProfileHeader from '../Header/ProfileHeader'
import Calendar from '../Calendar/Calendar'
import ProfileUserInfo from '../ProfileUserInfo/ProfileUserInfo'
import ProfileUserTier from '../ProfileUserTier/ProfileUserTier'
import HomePageButtons from '../HomePageButtons/HomePageButtons'

// import UserContext from '../../utils/UserContext'

import './UserProfile.css'
import { Container } from 'react-bootstrap'

const UserProfile = () => {
  // Currently logged in user
  // const user = useContext(UserContext)

  // Check if user has previosuly logged in when page loads.
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const loggedInUser = await localStorage.getItem('user')
  //     // console.log(loggedInUser)
  //     if (loggedInUser) {
  //       const foundUser = JSON.parse(loggedInUser)
  //       console.log(foundUser)
  //       setUser(foundUser)
  //     } else {
  //       console.log('No user logged in.')
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <div className="home-page">
        <ProfileHeader />
      </div>
      <div className="main-page-body">
        <div className="row">
          <ProfileUserTier />
          <div className="col-md-7">
            <ProfileUserInfo />
            <HomePageButtons />
            <Container
              style={{
                maxWidth: '730px',
                width: '100%',
                paddingRight: '0px',
                paddingLeft: '0px',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <Calendar />
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
