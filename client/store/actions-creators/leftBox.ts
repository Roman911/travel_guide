import { LeftBoxAction, LeftBoxActionTypes } from '../types/leftBox'

export const setLeftBox = (
  payload: 'createDirection' | 'createLocation' | 'locationsList'
): LeftBoxAction => {
  return { type: LeftBoxActionTypes.LEFT_BOX, payload }
}
