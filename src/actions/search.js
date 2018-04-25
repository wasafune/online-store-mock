import {
  SEARCH_ALL,
  SEARCH_SEARCHED,
  SEARCH_FILTERED,
} from '../constants'

// Async
export const searchAll = () => ({
  type: SEARCH_ALL,
  searchStr: '',
})

export const searchSearched = (searchStr, categories) => ({
  type: SEARCH_SEARCHED,
  searchStr,
  categories,
})

export const searchFiltered = categories => ({
  type: SEARCH_FILTERED,
  searchStr: '',
  categories,
})
