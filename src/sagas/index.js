import { all } from 'redux-saga/effects'

// Watchers
import watchSearch from './search'

export default function* rootSaga() {
  yield all([
    watchSearch(),
  ])
}
