import type { IUserData } from '../../types'

export interface UserState {
  userData: IUserData | null
  refreshToken: string
  accessToken: string
}

export enum UserActionTypes {
  SET_DATA = 'USER:SET_DATA',
  REMOVE_DATA = 'USER:REMOVE_DATA',
}

interface SetDataUserAction {
  type: UserActionTypes.SET_DATA
  payload: { user: IUserData; refreshToken: string; accessToken: string }
}

interface RemoveDataUserAction {
  type: UserActionTypes.REMOVE_DATA
}

export type UserAction = SetDataUserAction | RemoveDataUserAction
