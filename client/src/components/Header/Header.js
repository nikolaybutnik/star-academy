import React from 'react'
import './Header.css'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton'

function Header() {
  const { isAuthenticated } = useAuth0()
  return (
    <nav>
      <h5 className="navbar-header">Music Playground</h5>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </nav>
  )
}

export default Header
