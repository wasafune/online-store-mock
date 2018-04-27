import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CartItem from './CartItem'

import { quantityChangeCart, removeFromCart, assignShipping } from '../../../actions'

class Cart extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { name, value } = e.target
    const { props } = this
    if (!name.length) {
      const { cart, auth } = props
      if (!cart.total) {
        e.preventDefault()
        return
      }
      if (auth.userObj) {
        const { userObj } = auth
        const shippingObj = {
          fullname: userObj.fullname,
          ...userObj.shipping,
        }
        this.props.assignShipping(shippingObj)
        return
      }
      return
    }
    if (name === 'inc') this.props.quantityChangeCart(value, 1)
    if (props.cart.itemList[value].quantity) {
      if (name === 'dec') this.props.quantityChangeCart(value, -1)
      if (name === 'remove') {
        props.removeFromCart(value)
      }
    }
  }

  render() {
    const { handleClick, props } = this
    const checkoutPath = props.auth.userObj ? '/checkout' : '/checkout/shipping'
    const itemsArr = Object.values(props.cart.itemList).map((obj) => {
      return (
        <CartItem
          _id={obj._id}
          itemname={obj.itemname}
          type={obj.type}
          price={obj.price}
          quantity={obj.quantity}
          handleClick={handleClick}
        />
      )
    })
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-item-container">
          {itemsArr}
        </div>
        <div className="cart-item-checkout-container">
          Total:${(props.cart.total / 100).toFixed(2)}
          <Link
            href={checkoutPath}
            to={checkoutPath}
            onClick={handleClick}
          >
            <button>Checkout</button>
          </Link>
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
    quantityChangeCart,
    removeFromCart,
    assignShipping,
  },
  dispatch,
)

Cart.propTypes = {
  quantityChangeCart: PropTypes.func.isRequired,
  assignShipping: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart)
