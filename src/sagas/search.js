import { put, call, all, takeLatest } from 'redux-saga/effects'

// Actions
import {
  searchAll,
  searchSearched,
  searchFiltered,
} from '../apis/search'

// Constants
import {
  SEARCH_ALL, SEARCH_SEARCHED, SEARCH_FILTERED,
  SEARCH_SUCCESS, SEARCH_FAIL,
} from '../constants'

// Generators
function* callSearchAll() {
  try {
    const response = yield call(searchAll)
    yield put({ type: SEARCH_SUCCESS, searchArr: response.data })
  } catch (e) {
    yield put({ type: SEARCH_FAIL, error: e.message })
  }
}

function* callSearchSearched(action) {
  try {
    const { searchStr, categories } = action
    const response = yield call(searchSearched, searchStr, categories)
    yield put({ type: SEARCH_SUCCESS, searchArr: response.data })
  } catch (e) {
    yield put({ type: SEARCH_FAIL, error: e.message })
  }
}

function* callSearchFiltered(action) {
  try {
    const { categories } = action
    const response = yield call(searchFiltered, categories)
    yield put({ type: SEARCH_SUCCESS, searchArr: response.data })
  } catch (e) {
    yield put({ type: SEARCH_FAIL, error: e.message })
  }
}

// Watchers
function* watchSearch() {
  yield all([
    takeLatest(SEARCH_ALL, callSearchAll),
    takeLatest(SEARCH_SEARCHED, callSearchSearched),
    takeLatest(SEARCH_FILTERED, callSearchFiltered),
  ])
}

export default watchSearch
