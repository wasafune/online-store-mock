import {
  ITEM_CLICK, QUANTITY_CHANGE, CLEAR_ITEM,
  REQ_ITEM_SUCCESS, REQ_ITEM_FAIL,
} from '../constants'

const initialState = {
  itemname: '',
  _id: '',
  price: 0,
  type: '',
  variants: [],
  quantity: 0,
}

const item = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_CLICK:
      return {
        ...state,
        ...action.itemObj,
        quantity: 0,
        variants: [...action.itemObj.variants],
      }
    case QUANTITY_CHANGE:
      return {
        ...state,
        quantity: state.quantity + action.num,
      }
    case CLEAR_ITEM:
      return {
        ...initialState,
      }
    case REQ_ITEM_SUCCESS: {
      return {
        ...state,
        itemname: action.itemObj.itemname,
        ...action.itemObj.variants[0],
        variants: [...action.itemObj.variants],
      }
    }
    case REQ_ITEM_FAIL:
    default:
      return state
  }
}

export default item
