import { combineReducers } from 'redux'

import cart from './cart'
import search from './search'
import item from './item'

export default combineReducers({
  cart,
  search,
  item,
})
