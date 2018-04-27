import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FormikSignupForm from './SignupForm'

import { createUser, unmountAuth } from '../../../actions'


class Signup extends Component {
  constructor() {
    super()
    this.handleActions = this.handleActions.bind(this)
  }

  componentWillUnmount() {
    this.props.unmountAuth()
  }

  handleActions(userObj) {
    this.props.createUser(userObj)
  }

  render() {
    const { props, handleActions } = this
    return (
      <div className="signup">
        <h1>Sign Up</h1>
        <FormikSignupForm handleActions={handleActions} />
        {
          props.auth.createSuccess
            ? <Link href="/auth" to="/auth">Success! Login here.</Link>
            : <Link href="/auth" to="/auth">Already a user?</Link>
        }
        {
          props.auth.error
          ? <p className="user-create-fail">User creation failed.</p>
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
    createUser,
    unmountAuth,
  },
  dispatch,
)

Signup.propTypes = {
  createUser: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup)
