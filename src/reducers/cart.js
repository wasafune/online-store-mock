import cloneDeep from 'lodash/cloneDeep'

import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants'

const initialState = {
  itemList: {},
  total: 0,
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItemList = cloneDeep(state.itemList)
      if (state.itemList[action.itemObj._id]) {
        newItemList[action.itemObj._id].quantity += action.itemObj.quantity
      } else {
        newItemList[action.itemObj._id] = action.itemObj
      }
      const total = Object.values(newItemList).reduce((sum, obj) => {
        return sum + (obj.price * obj.quantity)
      }, 0)
      return {
        ...state,
        itemList: newItemList,
        total,
      }
    }
    default:
      return state
  }
}

export default cart
