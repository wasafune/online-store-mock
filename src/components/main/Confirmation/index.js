import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Confirmation extends Component {
  render() {
    const { cart } = this.props
    return (
      <div className="confirmation-container">
        <h1>Order Confirmed!</h1>
        <p>Confirmation #: {cart.confirmationObj.id}</p>
        <p>Total: ${(cart.confirmationObj.amount / 100).toFixed(2)}</p>
        <Link href="/" to="/">Back to shopping</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Confirmation)
