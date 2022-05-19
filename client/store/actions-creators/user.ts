import { UserAction, UserActionTypes } from '../types/user'

export const setData = (text: string): UserAction => {
  return { type: UserActionTypes.SET_DATA, payload: text }
}

export const removeData = (): UserAction => {
  return { type: UserActionTypes.REMOVE_DATA }
}