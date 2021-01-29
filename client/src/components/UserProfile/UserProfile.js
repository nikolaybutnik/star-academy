/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import ProfileHeader from '../Header/ProfileHeader'
import Calendar from '../Calendar/Calendar'
import ProfileUserInfo from '../ProfileUserInfo/ProfileUserInfo'
import ProfileUserTier from '../ProfileUserTier/ProfileUserTier'
import HomePageButtons from '../HomePageButtons/HomePageButtons'

import { useUser } from '../../utils/UserContext'

import './UserProfile.css'
import { Container } from 'react-bootstrap'

const UserProfile = () => {
  // Currently logged in user
  const { user } = useUser()

  useEffect(() => {
    // console.log(user)
  }, [user])

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <div className="home-page">
        {/* <Header /> */}
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
    </div>
  )
}

export default UserProfile
