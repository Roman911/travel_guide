import { DrawerAction, DrawerActionTypes } from '../types/drawer'

export const openDrawer = (): DrawerAction => {
  return { type: DrawerActionTypes.OPEN_DRAWER }
}

export const closeDrawer = (): DrawerAction => {
  return { type: DrawerActionTypes.CLOSE_DRAWER }
}