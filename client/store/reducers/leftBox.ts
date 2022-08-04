import {
  LeftBoxAction,
  LeftBoxActionTypes,
  LeftBoxState,
} from '../types/leftBox'

const initialState: LeftBoxState = {
  leftBox: 'locationsList',
}

export const leftBoxReducer = (
  state = initialState,
  action: LeftBoxAction
): LeftBoxState => {
  switch (action.type) {
    case LeftBoxActionTypes.LEFT_BOX:
      return {
        ...state,
        leftBox: action.payload,
      }
    default:
      return state
  }
}
