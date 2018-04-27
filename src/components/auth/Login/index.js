import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FormikLoginForm from './LoginForm'

import { login, unmountError } from '../../../actions'


class Login extends Component {
  constructor() {
    super()
    this.handleActions = this.handleActions.bind(this)
  }

  componentWillUnmount() {
    if (this.props.auth.error) this.props.unmountError()
  }

  handleActions(userObj) {
    this.props.login(userObj)
  }

  render() {
    const { props, handleActions } = this
    return (
      <div className="login">
        {props.auth.userObj ? <Redirect to="/" /> : null}
        <h1>Login</h1>
        <FormikLoginForm handleActions={handleActions} />
        <Link href="/auth/signup" to="/auth/signup">New User?</Link>
        {
          props.auth.error
          ? <p className="login-fail">Login failed.</p>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    login,
    unmountError,
  },
  dispatch,
)

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
