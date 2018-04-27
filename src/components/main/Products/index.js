import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ItemBox from './ItemBox'

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

  componentDidMount() {
    const { search, location } = this.props
    if (!search.searchArr.length && !search.searching) {
      const pathname = location.pathname.split('/').slice(-1)[0]
      if (pathname === 'products') {
        this.props.searchAll()
      } else {
        this.props.searchFiltered([pathname])
      }
    }
  }

  handleClick(e, itemObj) {
    this.props.itemClick(itemObj)
  }

  render() {
    const title = this.props.location.pathname.split('/').slice(-1)[0]
    let formattedTitle = title.replace(title[0], title[0].toUpperCase())
    if (formattedTitle.slice(-1) !== 's') formattedTitle += 's'
    const productsArr = this.props.search.searchArr.map((obj) => {
      return (
        <ItemBox
          _id={obj._id}
          itemname={obj.itemname}
          variants={obj.variants}
          handleClick={this.handleClick}
          key={obj._id}
        />
      )
    })
    return (
      <div className="products-container">
        <h1>{formattedTitle}</h1>
        <div className="item-box-container">
          {productsArr}
        </div>
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
