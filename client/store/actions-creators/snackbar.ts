import { SnackbarAction, SnackbarActionTypes } from '../types/snackbar'

export const enqueueSnackbar = (payload: { message: string, key: string }): SnackbarAction => {
  return { type: SnackbarActionTypes.ENQUEUE_SNACKBAR, payload }
}

export const removeSnackbar = (payload: string): SnackbarAction => {
  return { type: SnackbarActionTypes.REMOVE_SNACKBAR, payload }
}