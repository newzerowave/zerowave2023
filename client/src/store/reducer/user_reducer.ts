import { SET_USERID, GET_USER, LOGOUT_USER } from './../action/types';
import { setUserId, getUser, logoutUser } from './../action/user_action';

interface User {
  userId: string;
}

type UserStateType = {
  user: User;
  isLoggedIn: boolean;
};

const initialState = {
  user: {
    userId: 'hyebin',
  },
  isLoggedIn: false,
};

type UserActionType =
  | ReturnType<typeof setUserId>
  | ReturnType<typeof getUser>
  | ReturnType<typeof logoutUser>;

export default function userReducer(
  state: UserStateType = initialState,
  action: UserActionType
) {
  switch (action.type) {
    case SET_USERID:
      const newUser: User = {
        userId: action.payload,
      };
      return {
        ...state,
        user: newUser,
        isLoggedIn: true,
      };
    case GET_USER:
      return {
        ...state,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {
          userId: '',
        },
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
