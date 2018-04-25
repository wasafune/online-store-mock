import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  searchSearched,
  searchFiltered,
} from '../../../actions'
import SearchBar from './SearchBar'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link href="/" to="/">
          Cool Store
        </Link>
        <div>
          <SearchBar
            searchSearched={this.props.searchSearched}
            searchFiltered={this.props.searchFiltered}
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
    searchFiltered,
  },
  dispatch,
)

Nav.propTypes = {
  searchSearched: PropTypes.func.isRequired,
  searchFiltered: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav)
