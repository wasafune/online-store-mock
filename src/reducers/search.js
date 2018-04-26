import {
  SEARCH_ALL, SEARCH_SEARCHED, SEARCH_FILTERED,
  SEARCH_SUCCESS, SEARCH_FAIL,
} from '../constants'

const initialState = {
  latestSearch: '',
  searchArr: [],
  searching: false,
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ALL:
      return {
        ...state,
        searching: true,
      }
    case SEARCH_SEARCHED:
    case SEARCH_FILTERED:
      return {
        ...state,
        searching: true,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        searchArr: [...action.searchArr],
        searching: false,
      }

    case SEARCH_FAIL:
      return {
        ...state,
        searching: false,
      }

    default:
      return state
  }
}

export default search
