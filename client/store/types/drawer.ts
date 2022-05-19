export interface DrawerState {
  drawerIsOpen: boolean
}

export enum DrawerActionTypes {
  OPEN_DRAWER = 'DRAWER:OPEN_DRAWER',
  CLOSE_DRAWER = 'DRAWER:CLOSE_DRAWER'
}

interface OpenDrawerAction { type: DrawerActionTypes.OPEN_DRAWER }

interface CloseDrawerAction { type: DrawerActionTypes.CLOSE_DRAWER }

export type DrawerAction = OpenDrawerAction | CloseDrawerAction