export interface LeftBoxState {
  leftBox: 'createDirection' | 'createLocation' | 'locationsList'
}

export enum LeftBoxActionTypes {
  LEFT_BOX = 'LEFT_BOX',
}

interface SetLeftBoxAction {
  type: LeftBoxActionTypes.LEFT_BOX
  payload: 'createDirection' | 'createLocation' | 'locationsList'
}

export type LeftBoxAction = SetLeftBoxAction
