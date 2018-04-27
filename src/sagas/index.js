import { all } from 'redux-saga/effects'

// Watchers
import watchSearch from './search'
import watchCart from './cart'
import watchItem from './item'
import watchAuth from './auth'

export default function* rootSaga() {
  yield all([
    watchSearch(),
    watchCart(),
    watchItem(),
    watchAuth(),
  ])
}
