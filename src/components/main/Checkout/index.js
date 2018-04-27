import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CheckoutItem from './CheckoutItem'
// import './Cart.scss'

import { reqCheckout, unmountCheckout } from '../../../actions'

class Checkout extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount() {
    this.props.unmountCheckout()
  }

  handleClick(event) {
    if (this.props.cart.placingOrder) return
    if (!this.props.cart.total) return
    if (this.props.cart.confirmationObj) return
    const { name } = event.target
    if (name === 'place-order') {
      const { cart, auth } = this.props
      const {
        itemList, fullname, line1, city,
      } = cart
      const skuObjArr = Object.values(itemList).map((item) => {
        return {
          type: 'sku',
          parent: item._id,
          quantity: item.quantity,
        }
      })
      const checkoutObj = {
        currency: 'usd',
        items: skuObjArr,
        shipping: {
          name: fullname,
          address: {
            line1,
            city,
            postal_code: cart.postal_code,
          },
        },
      }
      if (auth.userObj) checkoutObj.customer = auth.userObj.id
      this.props.reqCheckout(checkoutObj)
    }
  }

  render() {
    const { handleClick, props } = this
    const { cart } = props
    const itemsArr = Object.values(props.cart.itemList).map((obj) => {
      return (
        <CheckoutItem
          itemname={obj.itemname}
          type={obj.type}
          price={obj.price}
          quantity={obj.quantity}
        />
      )
    })
    return (
      <div className="checkout-container">
        <h1>Checkout</h1>
        {
          cart.confirmationObj
            ? <Redirect href="/checkout/confirmation" to="/checkout/confirmation" />
            : null
        }
        <div className="checkout-items-container">
          {itemsArr}
        </div>
        <div className="checkout-shipping-info">
          <h3>Ship to:</h3>
          <p>Name: {cart.fullname}</p>
          <p>Address: {cart.line1}</p>
          <p>City: {cart.city}</p>
          <p>Zip: {cart.postal_code}</p>
        </div>
        <div className="checkout-item-checkout-container">
          Total:${(props.cart.total / 100).toFixed(2)}
          <button name="place-order" onClick={handleClick}>Place Order</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    reqCheckout,
    unmountCheckout,
  },
  dispatch,
)

Checkout.propTypes = {
  reqCheckout: PropTypes.func.isRequired,
  unmountCheckout: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout)
