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
    addedData: (
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
    removeData: state => {
      ;(state.userData = null),
        (state.accessToken = ''),
        (state.refreshToken = '')
    },
  },
})

export const { addedData, removeData } = userSlice.actions

export const selectUser = (state: AppState) => state.user

export default userSlice.reducer
