import React from 'react'
import './Header.css'
import { useAuth0 } from '@auth0/auth0-react'
// import LoginButton from "../LoginButton";
// import LogoutButton from "../LogoutButton";

function Header() {
  const { isAuthenticated } = useAuth0()
  return (
    <nav className="navbar">
      <h1 className="navbar-header col-md-9">Star Academy</h1>
      {/* <button className="col-md-1">ho</button>
      <button className="col-md-1">ho</button> */}
      {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
    </nav>
  )
}

export default Header
