/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import ProfileHeader from '../Header/ProfileHeader'
import Calendar from '../Calendar/Calendar'
import ProfileUserInfo from '../ProfileUserInfo/ProfileUserInfo'
import ProfileUserTier from '../ProfileUserTier/ProfileUserTier'
import HomePageButtons from '../HomePageButtons/HomePageButtons'
import { Container } from 'react-bootstrap'
import { differenceInHours, differenceInMinutes } from 'date-fns'
import updateUser from '../../utils/updateUser'
import { useUser } from '../../utils/UserContext'

import './UserProfile.css'

const UserProfile = () => {
  // Currently logged in user
  let { user, setUser } = useUser()

  useEffect(() => {
    // Check if user's energy needs to be topped on page render
    if (user) {
      if (user.energy.value < user.maxEnergy) {
        const now = Date.parse(new Date())
        const timestamp = Date.parse(user.energy.timestamp)
        const difference = differenceInMinutes(now, timestamp)
        console.log(difference)
        if (difference >= 1 && difference < 2) {
          user = {
            ...user,
            energy: { value: user.energy.value + 1, timestamp: new Date() },
          }
          updateUser(user)
          setUser(user)
        } else if (difference >= 2 && difference < 3) {
          user = {
            ...user,
            energy: { value: user.energy.value + 2, timestamp: new Date() },
          }
          updateUser(user)
          setUser(user)
        } else if (difference >= 3) {
          user = {
            ...user,
            energy: { value: user.energy.value + 3, timestamp: new Date() },
          }
          updateUser(user)
          setUser(user)
        }
        if (user.energy.value > user.maxEnergy) {
          user = {
            ...user,
            energy: { value: user.maxEnergy, timestamp: new Date() },
          }
          updateUser(user)
          setUser(user)
        }
      }
    }
  }, [])

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <div className="home-page">
        <ProfileHeader />
        <hr style={{ borderWidth: '2px' }}></hr>
      </div>
      <div className="main-page-body">
        <div className="row">
          <ProfileUserTier />
          <div className="col-md-8" style={{ padding: '0px' }}>
            <ProfileUserInfo />
            <HomePageButtons />
            <Container className="calendar-container col-md-11">
              <Calendar />
            </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
