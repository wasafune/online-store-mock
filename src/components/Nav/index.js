import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchSearched, unmountAuth } from '../../actions'
import SearchBar from './SearchBar'

class Nav extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.auth.userObj) this.props.unmountAuth()
  }

  render() {
    const { props, handleClick } = this
    const { search, auth } = props
    return (
      <div className="nav">
        <Link className="main-link" href="/" to="/">
          Cool Store
        </Link>
        <div className="nav-right-container">
          <SearchBar
            searchSearched={props.searchSearched}
            searching={search.searching}
          />
          <Link href="/auth" to="/auth" onClick={handleClick}>
            {auth.userObj ? 'Logout' : 'Login'}
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    searchSearched,
    unmountAuth,
  },
  dispatch,
)

Nav.propTypes = {
  unmountAuth: PropTypes.func.isRequired,
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav)
