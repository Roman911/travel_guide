import { DrawerGMAction, DrawerGMActionTypes, DrawerGMState } from "../types/drawerGoogleMap"

const initialState: DrawerGMState = {
  drawerIsOpen: false,
  locationID: ''
}

export const drawerGMReducer = (state = initialState, action: DrawerGMAction): DrawerGMState => {
  switch (action.type) {
    case DrawerGMActionTypes.OPEN_DRAWER:
      return {
        ...state,
        drawerIsOpen: true,
        locationID: action.payload
      }
    case DrawerGMActionTypes.CLOSE_DRAWER:
      return {
        ...state,
        drawerIsOpen: false,
        locationID: ''
      }
    default: return state
  }
}