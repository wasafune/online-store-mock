import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Signup, Login } from '../components/auth'
import Nav from '../components/Nav'
// import './MainLayout.scss'

const AuthLayout = () => {
  return (
    <div className="auth">
      <Nav />
      <Switch>
        <Route exact path="/auth" component={Login} />
        <Route exact path="/auth/signup" component={Signup} />
      </Switch>
    </div>
  )
}


export default AuthLayout
