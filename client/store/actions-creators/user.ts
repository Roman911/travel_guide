import { UserAction, UserActionTypes } from '../types/user'
import type { IUserData } from '../../types'

export const setData = (payload: {
  user: IUserData
  refreshToken: string
  accessToken: string
}): UserAction => {
  return { type: UserActionTypes.SET_DATA, payload }
}

export const removeData = (): UserAction => {
  return { type: UserActionTypes.REMOVE_DATA }
}
