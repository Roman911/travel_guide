export interface RegionsState {
  option: {
    label: string
    center: { lat: number; lng: number }
  } | null
}

export enum RegionsActionTypes {
  SET_REGION = 'REGIONS:SET_REGION',
}

interface SetRegionAction {
  type: RegionsActionTypes.SET_REGION
  payload: { label: string; center: { lat: number; lng: number } | null }
}

export type RegionsAction = SetRegionAction
