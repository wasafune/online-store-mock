import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ItemBox from './ItemBox'
// import './Products.scss'

import {
  searchAll,
  searchFiltered,
  itemClick,
} from '../../../actions'

class Products extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, itemObj) {
    switch (e.target.name) {
      case 'all':
        this.props.searchAll()
        break
      case 'food':
      case 'clothing':
        this.props.searchFiltered([e.target.name])
        break
      case 'item-box':
        this.props.itemClick(itemObj)
        break
      default: break
    }
  }

  render() {
    const productsArr = this.props.search.searchArr.map((obj) => {
      return (
        <ItemBox
          _id={obj._id}
          itemname={obj.itemname}
          price={obj.price}
          handleClick={this.handleClick}
          key={obj._id}
        />
      )
    })
    return (
      <div className="products-container">
        <h1>Products</h1>
        {productsArr}
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
    itemClick,
  },
  dispatch,
)

Products.propTypes = {
  itemClick: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products)
