import {
  ITEM_CLICK,
  QUANTITY_CHANGE,
  CLEAR_ITEM,
  REQ_ITEM,
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

export const reqItem = itemname => ({
  type: REQ_ITEM,
  itemname,
})
