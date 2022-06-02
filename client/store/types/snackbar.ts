export interface SnackbarState {
  notifications: { message: string, key: string }[]
}

export enum SnackbarActionTypes {
  ENQUEUE_SNACKBAR = 'SNACKBAR:ENQUEUE_SNACKBAR',
  REMOVE_SNACKBAR = 'SNACKBAR:REMOVE_SNACKBAR'
}

interface EnqueueSnackbarAction { type: SnackbarActionTypes.ENQUEUE_SNACKBAR, payload: { message: string, key: string } }

interface RemoveSnackbarAction { type: SnackbarActionTypes.REMOVE_SNACKBAR, payload: string }

export type SnackbarAction = EnqueueSnackbarAction | RemoveSnackbarAction