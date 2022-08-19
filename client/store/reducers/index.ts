import { combineReducers } from 'redux'
//import { drawerReducer } from './drawer'
//import { drawerGMReducer } from './drawerGoogleMap'
//import { leftBoxReducer } from './leftBox'
import layoutReducer from './layoutSlice'
import mapBoxReducer from './mapBoxSlice'
//import { progressReducer } from './progress'
import regionReducer from './regionSlice'
//import { snackbarReducer } from './snackbar'
import userReducer from './userSlice'

export const rootReducer = combineReducers({
  layout: layoutReducer,
  mapBox: mapBoxReducer,
  region: regionReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
