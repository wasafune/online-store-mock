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

  handleClick(e) {
    const { name } = e.target
    if (name === 'all') this.props.searchAll()
    if (name === 'food' || name === 'clothing') {
      this.props.searchFiltered([name])
    }
  }

  render() {
    const { handleClick } = this
    return (
      <div className="products-nav">
        <Link
          href="/products"
          to="/products"
          name="all"
          onClick={handleClick}
        >
          Browse All
        </Link>
        <Link
          href="/products/food"
          to="/products/food"
          name="food"
          onClick={handleClick}
        >
          Browse Food
        </Link>
        <Link
          href="/products/clothing"
          to="/products/clothing"
          name="clothing"
          onClick={handleClick}
        >
          Browse Clothing
        </Link>
        <Link
          href="/cart"
          to="/cart"
        >
          Cart
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
