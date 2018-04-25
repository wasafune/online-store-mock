import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Nav, Welcome } from '../components/main'

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>MainLayout</h1>
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* <Route exact path="/" component={MainLayout} /> */}
        </Switch>

      </div>
    )
  }
}


export default MainLayout
