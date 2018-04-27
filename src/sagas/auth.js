import { put, call, all, takeLatest } from 'redux-saga/effects'

import {
  createUser,
  login,
} from '../apis'

import {
  CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAIL,
  LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,
} from '../constants'

function* callCreateUser(action) {
  try {
    yield call(createUser, action.userObj)
    yield put({ type: CREATE_USER_SUCCESS })
  } catch (e) {
    yield put({ type: CREATE_USER_FAIL, error: e.message })
  }
}

function* callLogin(action) {
  try {
    const response = yield call(login, action.userObj)
    if (!response.data) {
      yield put({ type: LOGIN_FAIL })
    } else {
      yield put({ type: LOGIN_SUCCESS, userObj: response.data })
    }
  } catch (e) {
    yield put({ type: LOGIN_FAIL, error: e.message })
  }
}

function* watchAuth() {
  yield all([
    takeLatest(CREATE_USER, callCreateUser),
    takeLatest(LOGIN, callLogin),
  ])
}

export default watchAuth
