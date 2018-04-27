import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'


const SignupForm = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input
        type="text"
        name="line1"
        placeholder="Address"
        value={values.line1}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input
        type="text"
        name="postal_code"
        placeholder="Zip Code"
        value={values.postal_code}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="submit"
        disabled={isSubmitting}
      >
        Sign Up
      </button>
    </form>
  )
}

SignupForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
}

const FormikSignupForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
    fullname: '',
    line1: '',
    city: '',
    postal_code: '',
  }),

  validate: (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid Email address'
    }
    return errors
  },


  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleActions(values)
    setSubmitting(false)
  },
  displayName: 'BasicForm',
})(SignupForm)


export default FormikSignupForm
