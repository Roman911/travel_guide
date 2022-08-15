import {
  MapBoxAction,
  MapBoxActionTypes,
  ILocation,
  IViewport,
} from '../types/mapBox'

export const setViewport = (payload: { viewport: IViewport }): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_VIEWPORT, payload }
}

export const setHighlightedId = (payload: {
  highlightedId: string | null
}): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_HIGHLIGHTED_ID, payload }
}

export const setSelected = (payload: {
  selected: ILocation | null
}): MapBoxAction => {
  return { type: MapBoxActionTypes.SET_SELECTED, payload }
}
