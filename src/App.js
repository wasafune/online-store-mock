import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainLayout} />
      </Switch>
    )
  }
}

export default App
