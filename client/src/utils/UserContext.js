import React from 'react'

const UserContext = React.createContext({
  email: '',
  username: '',
  password: '',
  joined: '',
  level: 0,
  experience: 0,
  class: '',
  energy: 0,
  maxEnergy: 0,
  answered: [],
  firstName: '',
  lastName: '',
  gender: '',
  birthday: '',
  country: '',
})

export default UserContext
