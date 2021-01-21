import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button
      //   type="submit"
      class="btn btn-primary"
      onClick={() => loginWithRedirect()}
      id="qsLoginBtn"
    >
      Log In
    </button>
  )
}

export default LoginButton
