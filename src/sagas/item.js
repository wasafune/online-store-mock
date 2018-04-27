import { put, call, all, takeLatest } from 'redux-saga/effects'

// Actions
import { reqItem } from '../apis'

// Constants
import {
  REQ_ITEM,
  REQ_ITEM_SUCCESS,
  REQ_ITEM_FAIL,
} from '../constants'

// Generators
function* callReqItem(action) {
  try {
    const { itemname } = action
    const response = yield call(reqItem, itemname)
    yield put({ type: REQ_ITEM_SUCCESS, itemObj: response.data })
  } catch (e) {
    yield put({ type: REQ_ITEM_FAIL, error: e.message })
  }
}

// Watchers
function* watchItem() {
  yield all([
    takeLatest(REQ_ITEM, callReqItem),
  ])
}

export default watchItem
