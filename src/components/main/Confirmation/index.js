import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { unmountCart } from '../../../actions'

class Confirmation extends Component {
  componentWillUnmount() {
    this.props.unmountCart();
  }

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

Confirmation.propTypes = {
  unmountCart: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    unmountCart,
  },
  dispatch,
)


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirmation)
