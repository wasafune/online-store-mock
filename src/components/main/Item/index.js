import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { quantityChange, addToCart, clearItem, itemClick, reqItem } from '../../../actions'
// import './Item.scss'

class Item extends Component {
  constructor() {
    super()
    this.state = {
      showDropdown: false,
      added: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { item, location } = this.props
    if (!item.itemname) {
      const itemname = location.pathname.split('/').slice(-1)[0]
      this.props.reqItem(itemname)
    }
  }

  componentWillUnmount() {
    this.props.clearItem()
  }

  handleClick(event, index) {
    const { name } = event.target
    if (index !== undefined) {
      const { variants } = this.props.item
      const itemObj = {
        _id: variants[index]._id,
        price: variants[index].price,
        type: variants[index].type,
        variants,
      }
      this.props.itemClick(itemObj)
    }
    if (name === 'dropdown') {
      this.setState({ showDropdown: !this.state.showDropdown })
    }
    if (name === 'inc') this.props.quantityChange(1)
    if (this.props.item.quantity) {
      if (name === 'dec') this.props.quantityChange(-1)
      if (name === 'item-to-cart') {
        const cartObj = { ...this.props.item }
        delete cartObj.variants
        this.props.addToCart(cartObj)
        this.setState({ added: true })
      }
    }
  }


  render() {
    const { handleClick, state, props } = this
    const addedStr = state.added ? 'Added to cart!' : ''
    const dropdownArr = props.item.variants.map((variant, i) => {
      return (
        <button className="dropdown-button" name="dropdown" onClick={e => handleClick(e, i)}>
          {variant.type}
        </button>
      )
    })
    return (
      <div className="item-container">
        <div className="item-img-container">
          <img
            className="item-img"
            src="https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C240-128.png"
            alt="item-pic"
          />
        </div>
        <div className="item-info-container">
          <h3 className="item-title">{this.props.item.itemname}</h3>
          <button className="dropdown-button-main" name="dropdown" onClick={handleClick}>
            {props.item.type}
          </button>
          {
            state.showDropdown
              ? <div className="downdown-container">{dropdownArr}</div>
              : null
          }
          <p className="item-price">Price: ${(this.props.item.price / 100).toFixed(2)}</p>
          <div className="item-quantity-container">
            <button name="dec" onClick={handleClick}>-</button>
            <p className="item-quantity">{this.props.item.quantity}</p>
            <button name="inc" onClick={handleClick}>+</button>
          </div>
          <button
            className="item-to-cart"
            name="item-to-cart"
            onClick={handleClick}
          >
            Add to Cart
          </button>
          <p>{addedStr}</p>
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
    itemClick,
    reqItem,
  },
  dispatch,
)

Item.propTypes = {
  quantityChange: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  itemClick: PropTypes.func.isRequired,
  reqItem: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item)
