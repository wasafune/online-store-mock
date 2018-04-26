import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Nav.scss'

import { searchSearched } from '../../../actions'
import SearchBar from './SearchBar'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link href="/" to="/">
          Cool Store
        </Link>
        <div className="nav-right-container">
          <SearchBar
            searchSearched={this.props.searchSearched}
            searching={this.props.searching}
          />
          Account
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
    searchSearched,
  },
  dispatch,
)

Nav.propTypes = {
  searchSearched: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav)
