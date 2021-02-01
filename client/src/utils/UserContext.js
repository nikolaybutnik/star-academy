/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import useLocalStorageState from '../utils/useLocalStorageState'
import { isToday, isYesterday, differenceInMinutes, parseJSON } from 'date-fns'
import updateUser from '../utils/updateUser'
import registerLoginEvent from '../utils/registerLoginEvent'
import dailyResetPersonalGoals from '../utils/dailyResetPersonalGoals'

// Store token and user object
const UserContext = React.createContext()

function UserProvider(props) {
  const [user, setUser] = useState()
  const [token, setToken] = useLocalStorageState('userToken')

  useEffect(() => {
    if (token) {
      getUser()
    }
  }, [token])

  function logout() {
    setUser(null)
    localStorage.removeItem('userToken')
  }

  function getUser() {
    fetch('/auth/users/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let user = data.data

        // Check if the day has advanced and personal goals need to be unchecked.
        dailyResetPersonalGoals(user, updateUser, setUser)

        // Check if the user logged in yesterday. If so, add 1 to streak.

        // Log the current log in event in database.
        registerLoginEvent(user)

        setUser(user)

        // Check if user's energy needs to be topped up since last time.
        if (user.energy.value < user.maxEnergy) {
          const now = new Date()
          const timestamp = parseJSON(user.energy.timestamp)
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
      })
  }
  return (
    <UserContext.Provider
      value={{ user, setUser, logout, setToken }}
      {...props}
    />
  )
}

function useUser() {
  const context = React.useContext(UserContext)
  if (!context) throw new Error('useUser must be used within a UserProvider')
  return context
}

export { UserProvider, useUser }
