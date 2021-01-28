import React, { useState, useEffect } from 'react'

export default function useLocalStorageState(key, initialState) {
  // Set the state to either what's in local storage or the initialState
  const [state, setState] = useState(() => {
    const storedValue = window.localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialState
  })

  useEffect(() => {
    if (state) {
      console.log('Saving state')
      window.localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState]
}
