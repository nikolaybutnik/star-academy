/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import useLocalStorageState from '../utils/useLocalStorageState'
import { isToday, isYesterday, differenceInMinutes, parseJSON } from 'date-fns'
import updateUser from '../utils/updateUser'
import registerLoginEvent from '../utils/registerLoginEvent'
import dailyResetPersonalGoals from '../utils/dailyResetPersonalGoals'
import userEnergyCheck from '../utils/userEnergyCheck'

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
        userEnergyCheck(user, updateUser, setUser)
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
