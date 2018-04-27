import { put, call, all, takeLatest } from 'redux-saga/effects'

import { reqCheckout } from '../apis'

import {
  REQ_CHECKOUT,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAIL,
} from '../constants'

function* callReqCheckout(action) {
  try {
    const { checkoutObj } = action
    const response = yield call(reqCheckout, checkoutObj)
    yield put({ type: CHECKOUT_SUCCESS, resObj: response.data })
  } catch (e) {
    yield put({ type: CHECKOUT_FAIL, error: e.message })
  }
}

function* watchCart() {
  yield all([
    takeLatest(REQ_CHECKOUT, callReqCheckout),
  ])
}

export default watchCart
