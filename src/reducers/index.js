import { combineReducers } from 'redux'

import cart from './cart'
import search from './search'

export default combineReducers({
  cart,
  search,
})
