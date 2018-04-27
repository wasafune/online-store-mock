import {
  CREATE_USER,
  LOGIN,
  UNMOUNT_AUTH,
  UNMOUNT_ERROR,
} from '../constants'

export const createUser = userObj => ({
  type: CREATE_USER,
  userObj,
})

export const login = userObj => ({
  type: LOGIN,
  userObj,
})

export const unmountError = () => ({
  type: UNMOUNT_ERROR,
})

export const unmountAuth = () => ({
  type: UNMOUNT_AUTH,
})
