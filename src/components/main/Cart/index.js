import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CartItem from './CartItem'
// import './Cart.scss'

import { quantityChange, addToCart } from '../../../actions'

class Cart extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { name } = event.target
    if (name === 'inc') this.props.quantityChange(1)
    if (this.props.item.quantity) {
      if (name === 'dec') this.props.quantityChange(-1)
      if (name === 'item-to-cart') {
        this.props.addToCart({ ...this.props.item })
      }
    }
  }

  render() {
    const { handleClick, props } = this
    const itemsArr = Object.values(props.cart.itemList).map((obj) => {
      return (
        <CartItem
          _id={obj._id}
          itemname={obj.itemname}
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
          Total:{props.cart.total}
          <button onClick={handleClick}>Checkout</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    quantityChange,
    addToCart,
  },
  dispatch,
)

Cart.propTypes = {
  quantityChange: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart)
