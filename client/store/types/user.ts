interface IUser {
  name: string
  email: string
  avatar?: string
}

export interface UserState {
  userData: IUser | null,
  refreshToken: string
}

export enum UserActionTypes {
  SET_DATA = 'USER:SET_DATA',
  REMOVE_DATA = 'USER:REMOVE_DATA'
}

interface SetDataUserAction { type: UserActionTypes.SET_DATA, payload: IUser }

interface RemoveDataUserAction { type: UserActionTypes.REMOVE_DATA }

export type UserAction = SetDataUserAction | RemoveDataUserAction