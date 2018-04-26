import { ITEM_CLICK, QUANTITY_CHANGE, CLEAR_ITEM } from '../constants'

const initialState = {
  _id: '',
  itemname: '',
  price: 0,
  quantity: 0,
}

const item = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_CLICK:
      return {
        ...state,
        ...action.itemObj,
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
    default:
      return state
  }
}

export default item
