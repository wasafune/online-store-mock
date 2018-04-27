import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  ProductsNav, Welcome, Products,
  Item, Cart, Checkout,
  Shipping, Confirmation,
} from '../components/main'
import Nav from '../components/Nav'

const MainLayout = () => {
  return (
    <div className="main">
      <Nav />
      <ProductsNav />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/fruit" component={Products} />
        <Route exact path="/products/vegetable" component={Products} />
        <Route exact path="/products/dessert" component={Products} />
        <Route path="/products" component={Item} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/shipping" component={Shipping} />
        <Route exact path="/checkout/confirmation" component={Confirmation} />
      </Switch>
    </div>
  )
}


export default MainLayout
