/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import useLocalStorageState from '../utils/useLocalStorageState'
import updateUser from '../utils/updateUser'
import registerLoginEvent from '../utils/registerLoginEvent'
import userLoginEventChecks from '../utils/userLoginEventChecks'

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
        // Log the current log in event in database.
        // registerLoginEvent(user)

        // Perform check on user login event.
        userLoginEventChecks(user, updateUser, setUser)
      })
    setUser(user)
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
