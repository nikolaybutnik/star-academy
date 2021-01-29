/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import useLocalStorageState from '../utils/useLocalStorageState'

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
        const user = data.data
        // Make a request to server to log the user log in event.
        const newLog = { id: user._id, log: new Date() }
        fetch('/log', {
          method: 'POST',
          body: JSON.stringify(newLog),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        })
        setUser(user)
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
