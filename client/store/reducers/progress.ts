import { ProgressAction, ProgressActionTypes, ProgressState } from "../types/progress"

const initialState: ProgressState = {
  linearProgress: false,
  circleProgress: false
}

export const progressReducer = (state = initialState, action: ProgressAction): ProgressState => {
  switch (action.type) {
    case ProgressActionTypes.LINEAR_PROGRESS:
      return {
        ...state,
        linearProgress: action.payload
      }
    case ProgressActionTypes.CIRCLE_PROGRESS:
      return {
        ...state,
        circleProgress: action.payload
      }
    default: return state
  }
}