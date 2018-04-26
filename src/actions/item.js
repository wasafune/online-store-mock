import {
  ITEM_CLICK,
  QUANTITY_CHANGE,
  CLEAR_ITEM,
} from '../constants'

// Async
export const itemClick = itemObj => ({
  type: ITEM_CLICK,
  itemObj,
})

export const quantityChange = num => ({
  type: QUANTITY_CHANGE,
  num,
})

export const clearItem = () => ({
  type: CLEAR_ITEM,
})
