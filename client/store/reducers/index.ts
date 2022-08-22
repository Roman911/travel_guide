import { combineReducers } from 'redux'
//import { drawerGMReducer } from './drawerGoogleMap'
import layoutReducer from './layoutSlice'
import mapBoxReducer from './mapBoxSlice'
import regionReducer from './regionSlice'
import uploadFileReducer, { uploadFileAPI } from './uloadFileSlice'
import userReducer from './userSlice'

export const rootReducer = combineReducers({
  layout: layoutReducer,
  mapBox: mapBoxReducer,
  region: regionReducer,
  uploadFile: uploadFileReducer,
  user: userReducer,
  [uploadFileAPI.reducerPath]: uploadFileAPI.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const UploadFileAPI = uploadFileAPI
