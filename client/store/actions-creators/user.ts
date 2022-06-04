import { UserAction, UserActionTypes } from '../types/user'

interface IUser {
  name: string
  email: string
  avatar?: string
}

export const setData = (payload: { user: IUser, refreshToken: string, accessToken: string }): UserAction => {
  return { type: UserActionTypes.SET_DATA, payload }
}

export const removeData = (): UserAction => {
  return { type: UserActionTypes.REMOVE_DATA }
}