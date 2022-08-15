import {
  MapBoxAction,
  MapBoxActionTypes,
  ILocation,
  IViewport,
} from '../types/mapBox'

export const setAddress = (payload: {
  address: string | null
}): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_ADDRESS, payload }
}

export const setHighlightedId = (payload: {
  highlightedId: string | null
}): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_HIGHLIGHTED_ID, payload }
}

export const setLatLng = (payload: {
  latLng: { latitude: number; longitude: number }
}): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_LAT_LNG, payload }
}

export const setSelected = (payload: {
  selected: ILocation | null
}): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_SELECTED, payload }
}

export const setType = (payload: { type: string }): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_TYPE, payload }
}

export const setViewport = (payload: { viewport: IViewport }): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_VIEWPORT, payload }
}
