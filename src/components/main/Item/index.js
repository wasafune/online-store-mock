import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import ItemBox from './ItemBox'
// import './Item.scss'

import { quantityChange, addToCart, clearItem } from '../../../actions'

class Item extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount() {
    this.props.clearItem()
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
    const { handleClick } = this
    return (
      <div className="item-container">
        <div className="item-img-container">
          <img src="https://wasafune.github.io/pc-icon.svg" alt="cool-pic" />
        </div>
        <div className="item-info-container">
          <p className="item-title">{this.props.item.itemname}</p>
          <p className="item-price">${this.props.item.price}</p>
          <div className="item-quantity-container">
            <button name="inc" onClick={handleClick}>+</button>
            {this.props.item.quantity}
            <button name="dec" onClick={handleClick}>-</button>
          </div>
          <button
            className="item-to-cart"
            name="item-to-cart"
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    quantityChange,
    addToCart,
    clearItem,
  },
  dispatch,
)

Item.propTypes = {
  quantityChange: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item)
