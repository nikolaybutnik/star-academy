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
        // if (!user.streakStart) {
        //   user.streakStart = new Date()
        //   user.streakLastVisit = new Date()
        // } else {
        //   const now = new Date()
        //   // find a library to find difference in dates.
        //   // if the difference between the visits is 2 or more, we set the streakStart property
        //   // and streakLastVisit property to new Date(), setting streak count to 0
        //   if (user.streakLastVisit )
        // }
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
