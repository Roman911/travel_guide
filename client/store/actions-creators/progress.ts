import { ProgressAction, ProgressActionTypes } from '../types/progress'

export const linearProgress = (payload: boolean): ProgressAction => {
  return { type: ProgressActionTypes.LINEAR_PROGRESS, payload }
}

export const circleProgress = (payload: boolean): ProgressAction => {
  return { type: ProgressActionTypes.CIRCLE_PROGRESS, payload }
}