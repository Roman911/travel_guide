export interface ProgressState {
  linearProgress: boolean,
  circleProgress: boolean
}

export enum ProgressActionTypes {
  LINEAR_PROGRESS = 'PROGRESS:LINEAR_PROGRESS',
  CIRCLE_PROGRESS = 'PROGRESS:CIRCLE_PROGRESS'
}

interface LinearProgressAction {
  type: ProgressActionTypes.LINEAR_PROGRESS, payload: boolean
}

interface CircleProgress {
  type: ProgressActionTypes.CIRCLE_PROGRESS, payload: boolean
}

export type ProgressAction = LinearProgressAction | CircleProgress