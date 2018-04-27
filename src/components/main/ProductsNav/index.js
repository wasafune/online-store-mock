import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  searchAll,
  searchFiltered,
} from '../../../actions'

class ProductsNav extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, type) {
    if (this.props.search.searching) {
      e.preventDefault()
      return
    }
    if (!e.metaKey) {
      if (type === 'all') {
        this.props.searchAll()
      } else {
        this.props.searchFiltered([type])
      }
    }
  }

  render() {
    const { handleClick } = this
    return (
      <div className="products-nav-container">
        <Link
          href="/products"
          to="/products"
          name="all"
          onClick={e => handleClick(e, 'all')}
        >
          <div className="products-nav-link products-nav-link-odd">
            All
          </div>
        </Link>
        <Link
          href="/products/vegetable"
          to="/products/vegetable"
          name="vegetable"
          onClick={e => handleClick(e, 'vegetable')}
        >
          <div className="products-nav-link products-nav-link-even">
            Vegetables
          </div>
        </Link>
        <Link
          href="/products/fruit"
          to="/products/fruit"
          name="fruit"
          onClick={e => handleClick(e, 'fruit')}
        >
          <div className="products-nav-link products-nav-link-odd">
            Fruits
          </div>
        </Link>
        <Link
          href="/products/dessert"
          to="/products/dessert"
          name="dessert"
          onClick={e => handleClick(e, 'dessert')}
        >
          <div className="products-nav-link products-nav-link-even">
            Desserts
          </div>
        </Link>
        <Link
          href="/cart"
          to="/cart"
        >
          <div className="products-nav-link products-nav-link-cart">
            Cart
          </div>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    searchAll,
    searchFiltered,
  },
  dispatch,
)

ProductsNav.propTypes = {
  searchAll: PropTypes.func.isRequired,
  searchFiltered: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsNav)
