import { combineReducers } from 'redux'

import cart from './cart'
import search from './search'
import item from './item'
import auth from './auth'

export default combineReducers({
  cart,
  search,
  item,
  auth,
})
