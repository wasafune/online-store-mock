import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
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
