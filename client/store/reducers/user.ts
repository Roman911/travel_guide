import { UserAction, UserActionTypes, UserState } from "../types/user"

const initialState: UserState = {
  userData: {
    name: 'Roman',
    email: 'roma-lysyk@ukr.net',
    avatar: '/59777662_2288353538149940_2722857180872048640_n.jpg'
  },
  refreshToken: ''
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_DATA:
      return {
        ...state,
        userData: action.payload.user,
        refreshToken: action.payload.refreshToken
      }
    case UserActionTypes.REMOVE_DATA:
      return {
        ...state,
        userData: null,
        refreshToken: ''
      }
    default: return state
  }
}