/* eslint-disable no-unused-vars */
import React from 'react'

const updateUser = (data) => {
  fetch('/edituser', {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
}

export default updateUser
