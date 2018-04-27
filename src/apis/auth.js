import axios from 'axios'

export const createUser = (userObj) => {
  return axios.post('/auth/signup', userObj)
}

export const login = (userObj) => {
  return axios.post('/auth', userObj)
}
