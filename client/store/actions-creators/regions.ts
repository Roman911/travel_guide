import { RegionsAction, RegionsActionTypes } from '../types/regions'

export const setRegion = (
  payload: {
    label: string
    center: { lat: number; lng: number }
  } | null
): RegionsAction => {
  return { type: RegionsActionTypes.SET_REGION, payload }
}
