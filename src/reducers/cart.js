import cloneDeep from 'lodash/cloneDeep'

import {
  ADD_TO_CART, REMOVE_FROM_CART, QUANTITY_CHANGE_CART, ASSIGN_SHIPPING,
  REQ_CHECKOUT, CHECKOUT_SUCCESS, CHECKOUT_FAIL, UNMOUNT_CHECKOUT,
} from '../constants'

const initialState = {
  itemList: {},
  total: 0,
  fullname: null,
  line1: null,
  city: null,
  postal_code: null,
  placingOrder: false,
  confirmationObj: null,
  error: false,
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
        total,
        itemList: newItemList,
      }
    }
    case QUANTITY_CHANGE_CART: {
      const newItemList = cloneDeep(state.itemList)
      newItemList[action._id].quantity += action.num
      const total = Object.values(newItemList).reduce((sum, obj) => {
        return sum + (obj.price * obj.quantity)
      }, 0)
      return {
        ...state,
        total,
        itemList: newItemList,
      }
    }
    case REMOVE_FROM_CART: {
      const newItemList = cloneDeep(state.itemList)
      delete newItemList[action._id]
      const total = Object.values(newItemList).reduce((sum, obj) => {
        return sum + (obj.price * obj.quantity)
      }, 0)
      return {
        ...state,
        total,
        itemList: newItemList,
      }
    }
    case ASSIGN_SHIPPING:
      return {
        ...state,
        ...action.shippingObj,
      }
    case REQ_CHECKOUT:
      return {
        ...state,
        placingOrder: true,
      }
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        itemList: {},
        total: 0,
        placingOrder: false,
        confirmationObj: cloneDeep(action.resObj),
      }
    case CHECKOUT_FAIL:
      return {
        ...state,
        placingOrder: false,
        error: true,
      }
    case UNMOUNT_CHECKOUT:
      return {
        ...state,
        error: false,
      }
    default:
      return state
  }
}

export default cart
