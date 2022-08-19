import { combineReducers } from 'redux'
//import { drawerReducer } from './drawer'
//import { drawerGMReducer } from './drawerGoogleMap'
//import { leftBoxReducer } from './leftBox'
//import { mapBoxReducer } from './mapBox'
//import { progressReducer } from './progress'
//import { regionsReducer } from './regions'
//import { snackbarReducer } from './snackbar'
import layoutReducer from './layoutSlice'
import userReducer from './userSlice'

export const rootReducer = combineReducers({
  layout: layoutReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
