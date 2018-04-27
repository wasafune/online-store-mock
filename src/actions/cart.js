import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  QUANTITY_CHANGE_CART,
  ASSIGN_SHIPPING,
  REQ_CHECKOUT,
  UNMOUNT_CHECKOUT,
} from '../constants'

// Async
export const addToCart = itemObj => ({
  type: ADD_TO_CART,
  itemObj,
})

export const removeFromCart = _id => ({
  type: REMOVE_FROM_CART,
  _id,
})

export const quantityChangeCart = (_id, num) => ({
  type: QUANTITY_CHANGE_CART,
  _id,
  num,
})

export const assignShipping = shippingObj => ({
  type: ASSIGN_SHIPPING,
  shippingObj,
})


export const reqCheckout = checkoutObj => ({
  type: REQ_CHECKOUT,
  checkoutObj,
})

export const unmountCheckout = () => ({
  type: UNMOUNT_CHECKOUT,
})
