import { DrawerAction, DrawerActionTypes, DrawerState } from "../types/drawer"

const initialState: DrawerState = {
  drawerIsOpen: false
}

export const drawerReducer = (state = initialState, action: DrawerAction): DrawerState => {
  switch (action.type) {
    case DrawerActionTypes.OPEN_DRAWER:
      return {
        ...state,
        drawerIsOpen: true
      }
    case DrawerActionTypes.CLOSE_DRAWER:
      return {
        ...state,
        drawerIsOpen: false
      }
    default: return state
  }
}