import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'


const ShippingForm = ({
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
        Submit
      </button>
    </form>
  )
}

ShippingForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
}

const FormikShippingForm = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    line1: '',
    city: '',
    postal_code: '',
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleActions(values)
    setSubmitting(false)
  },
  displayName: 'BasicForm',
})(ShippingForm)


export default FormikShippingForm
