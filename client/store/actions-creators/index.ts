import * as DrawerActionCreators from './drawer'
import * as ProgressActionCreators from './progress'
import * as ThemeActionCreators from './theme'
//import * as LoadingPageActionCreators from "./loadingPage"
//import * as NotificationCreators from './notification'
import * as UserCreators from './user'

export default {
  ...DrawerActionCreators,
  ...ProgressActionCreators,
  ...ThemeActionCreators,
  //...GetBackActionCreators,
  //...NotificationCreators,
  ...UserCreators
}