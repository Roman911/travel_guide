import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IUserData } from '../../types/user'
import { AppState } from '../store'

export interface UserState {
  userData: IUserData | null
  refreshToken: string
  accessToken: string
}

const initialState: UserState = {
  userData: null,
  refreshToken: '',
  accessToken: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserData: (
      state,
      action: PayloadAction<{
        user: IUserData
        refreshToken: string
        accessToken: string
      }>
    ) => {
      ;(state.userData = action.payload.user),
        (state.refreshToken = action.payload.refreshToken),
        (state.accessToken = action.payload.accessToken)
    },
    removeUserData: state => {
      ;(state.userData = null),
        (state.accessToken = ''),
        (state.refreshToken = '')
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      if (state.userData) {
        //@ts-ignore
        state.userData.avatars.push(action.payload)
      }
    },
  },
})

export const userActions = userSlice.actions

export const selectUser = (state: AppState) => state.user

export default userSlice.reducer
