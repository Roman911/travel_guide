import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { drawerReducer } from './drawer'
import { drawerGMReducer } from './drawerGoogleMap'
import { leftBoxReducer } from './leftBox'
import { mapBoxReducer } from './mapBox'
import { progressReducer } from './progress'
import { snackbarReducer } from './snackbar'
import { themeReducer } from './theme'
//import { loadingPageReducer } from "./loadingPage"
//import { notificationReducer } from './notification'
import { userReducer } from './user'

const rootReducer = combineReducers({
  drawer: drawerReducer,
  drawerGM: drawerGMReducer,
  leftBox: leftBoxReducer,
  mapBox: mapBoxReducer,
  progress: progressReducer,
  snackbar: snackbarReducer,
  theme: themeReducer,
  //getBack: getBackReducer,
  //notification: notificationReducer,
  user: userReducer,
})

// create your reducer
export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export type RootState = ReturnType<typeof rootReducer>
