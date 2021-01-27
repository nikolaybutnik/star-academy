import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import './components/Pages/Signup/Signup.css'

import Login from './components/Pages/Login/Login'
import Signup from './components/Pages/Signup/Signup'
import Quiz from './components/Pages/Quiz/Quiz'
import UserProfile from './components/UserProfile/UserProfile'

import { UserProvider, useUser } from './utils/UserContext'

function App() {
  return (
    // INCLUDE A SWITCH ROUTE AT THE END
    // HANDLE REDIRECTING HERE IF USER DOESN'T EXIST
    // ex: {user ? <Route/> : <Redirect/>}
    <UserProvider>
      <Router>
        <div className="container col-md-12">
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/userprofile" component={UserProfile} />
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
