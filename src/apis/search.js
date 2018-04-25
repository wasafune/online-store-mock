import axios from 'axios'

export const searchAll = () => {
  return axios.get('/search/all')
}

export const searchSearched = (searchStr, categories) => {
  return axios.post(
    '/search/searched',
    { searchStr, categories },
  )
}

export const searchFiltered = (categories) => {
  return axios.post(
    '/search/filtered',
    { categories },
  )
}
