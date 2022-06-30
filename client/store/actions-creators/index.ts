import * as DrawerActionCreators from './drawer'
import * as DrawerGMActionCreators from './drawerGoogleMap'
import * as ProgressActionCreators from './progress'
import * as SnackbarActionCreators from './snackbar'
import * as ThemeActionCreators from './theme'
//import * as LoadingPageActionCreators from "./loadingPage"
//import * as NotificationCreators from './notification'
import * as UserCreators from './user'

export default {
  ...DrawerActionCreators,
  ...DrawerGMActionCreators,
  ...ProgressActionCreators,
  ...SnackbarActionCreators,
  ...ThemeActionCreators,
  //...GetBackActionCreators,
  //...NotificationCreators,
  ...UserCreators
}