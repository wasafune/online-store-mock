import cloneDeep from 'lodash/cloneDeep'

import {
  CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAIL,
  LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,
  UNMOUNT_ERROR, UNMOUNT_AUTH,
} from '../constants'

const initialState = {
  userObj: null,
  shippingObj: null,
  awaiting: false,
  createSuccess: false,
  error: false,
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        awaiting: true,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        awaiting: false,
        createSuccess: true,
      }
    case CREATE_USER_FAIL:
      return {
        ...state,
        awaiting: false,
        error: true,
      }
    case LOGIN:
      return {
        ...state,
        awaiting: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        awaiting: false,
        error: false,
        userObj: cloneDeep(action.userObj),
      }
    case LOGIN_FAIL:
      return {
        ...state,
        awaiting: false,
        error: true,
      }
    case UNMOUNT_ERROR:
      return {
        ...state,
        error: false,
      }
    case UNMOUNT_AUTH:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default cart
