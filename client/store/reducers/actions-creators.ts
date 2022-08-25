import { layoutActions } from './layoutSlice'
import { mapBoxActions } from './mapBoxSlice'
import { regionActions } from './regionSlice'
import { uploadFileActions } from './uloadFileSlice'
import { userActions } from './userSlice'

export const allActions = {
  ...layoutActions,
  ...mapBoxActions,
  ...regionActions,
  ...uploadFileActions,
  ...userActions,
}
