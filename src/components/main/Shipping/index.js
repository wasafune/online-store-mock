import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FormikShippingForm from './ShippingForm'

import { assignShipping } from '../../../actions'


class Shipping extends Component {
  constructor() {
    super()
    this.handleActions = this.handleActions.bind(this)
  }

  handleActions(shippingObj) {
    this.props.assignShipping(shippingObj)
  }

  render() {
    const { props, handleActions } = this
    return (
      <div className="shipping">
        <h1>Shipping Information</h1>
        {props.cart.fullname ? <Redirect to="/checkout" /> : null}
        <FormikShippingForm handleActions={handleActions} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    assignShipping,
  },
  dispatch,
)

Shipping.propTypes = {
  assignShipping: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shipping)
