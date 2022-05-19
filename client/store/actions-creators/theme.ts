import { ThemeAction, ThemeActionTypes } from '../types/theme'

export const changeTheme = (payload: 'light' | 'dark'): ThemeAction => {
  return { type: ThemeActionTypes.THEME, payload }
}