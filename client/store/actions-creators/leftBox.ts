import { LeftBoxAction, LeftBoxActionTypes } from '../types/leftBox'

export const setLeftBox = (
  payload: 'createDirection' | 'createLocation' | 'locationsList' | string
): LeftBoxAction => {
  return { type: LeftBoxActionTypes.LEFT_BOX, payload }
}
