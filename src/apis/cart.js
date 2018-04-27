import axios from 'axios'

export const reqCheckout = (checkoutObj) => {
  return axios.post(
    '/checkout',
    checkoutObj,
  )
}
