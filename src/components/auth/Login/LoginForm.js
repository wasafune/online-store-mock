import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'


const LoginForm = ({
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
      <button
        type="submit"
        disabled={isSubmitting}
      >
        Login
      </button>
    </form>
  )
}

LoginForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
}

const FormikLoginForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
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
    setTimeout(() => {
      props.handleActions(values)
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'BasicForm',
})(LoginForm)


export default FormikLoginForm
