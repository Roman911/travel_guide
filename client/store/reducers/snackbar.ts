import { SnackbarAction, SnackbarActionTypes, SnackbarState } from "../types/snackbar"

const initialState: SnackbarState = {
  notifications: []
}

export const snackbarReducer = (state = initialState, action: SnackbarAction): SnackbarState => {
  switch (action.type) {
    case SnackbarActionTypes.ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          action.payload
        ],
      }
    case SnackbarActionTypes.REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.key !== action.payload
        )
      }
    default: return state
  }
}