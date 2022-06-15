import type { ITheme } from '../../typesScript'

export interface ThemeState {
  theme: 'light' | 'dark'
}

export enum ThemeActionTypes {
  THEME = 'THEME'
}

interface ChangeThemeAction {
  type: ThemeActionTypes.THEME,
  payload: 'light' | 'dark'
}

export type ThemeAction = ChangeThemeAction