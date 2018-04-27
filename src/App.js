import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import './stylesheets/main.scss'

const App = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthLayout} />
      <Route path="/" component={MainLayout} />
    </Switch>
  )
}

export default App
