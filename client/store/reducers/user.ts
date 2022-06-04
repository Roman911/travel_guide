import { UserAction, UserActionTypes, UserState } from "../types/user"

const initialState: UserState = {
  userData: null,
  refreshToken: '',
  accessToken: ''
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_DATA:
      return {
        ...state,
        userData: action.payload.user,
        refreshToken: action.payload.refreshToken,
        accessToken: action.payload.accessToken
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