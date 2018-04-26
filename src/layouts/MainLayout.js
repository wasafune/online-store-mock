import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  Nav, ProductsNav, Welcome,
  Products, Item, Cart,
} from '../components/main'
import './MainLayout.scss'

class MainLayout extends Component {
  render() {
    return (
      <div id="main">
        <Nav />
        <ProductsNav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/food" component={Products} />
          <Route exact path="/products/clothing" component={Products} />
          <Route path="/products" component={Item} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    )
  }
}


export default MainLayout
