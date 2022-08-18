import {
  RegionsAction,
  RegionsActionTypes,
  RegionsState,
} from '../types/regions'

const initialState: RegionsState = {
  option: null,
}

export const regionsReducer = (
  state = initialState,
  action: RegionsAction
): RegionsState => {
  switch (action.type) {
    case RegionsActionTypes.SET_REGION:
      return {
        ...state,
        option: action.payload,
      }
    default:
      return state
  }
}
