import { SET_USERID, LOGOUT_USER, GET_USER } from './types';

export function setUserId(userId: string) {
  return {
    type: SET_USERID,
    payload: userId,
  };
}

export function getUser() {
  return {
    type: GET_USER,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
