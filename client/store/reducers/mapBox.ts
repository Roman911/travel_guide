import { MapBoxAction, MapBoxActionTypes, MapBoxState } from '../types/mapBox'

const initialState: MapBoxState = {
  viewport: {
    latitude: 48.6,
    longitude: 31.48307,
    zoom: 5.5,
  },
  highlightedId: null,
  selected: null,
}

export const mapBoxReducer = (
  state = initialState,
  action: MapBoxAction
): MapBoxState => {
  switch (action.type) {
    case MapBoxActionTypes.SET_VIEWPORT:
      return {
        ...state,
        viewport: action.payload.viewport,
      }
    case MapBoxActionTypes.SET_HIGHLIGHTED_ID:
      return {
        ...state,
        highlightedId: action.payload.highlightedId,
      }
    case MapBoxActionTypes.SET_SELECTED:
      return {
        ...state,
        selected: action.payload.selected,
      }
    default:
      return state
  }
}
