import { MapBoxAction, MapBoxActionTypes, MapBoxState } from '../types/mapBox'

const initialState: MapBoxState = {
  address: null,
  highlightedId: null,
  latLng: {
    latitude: 0,
    longitude: 0,
  },
  selected: null,
  type: 'other',
  viewport: {
    latitude: 48.6,
    longitude: 31.48307,
    zoom: 5.5,
  },
}

export const mapBoxReducer = (
  state = initialState,
  action: MapBoxAction
): MapBoxState => {
  switch (action.type) {
    case MapBoxActionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      }
    case MapBoxActionTypes.SET_HIGHLIGHTED_ID:
      return {
        ...state,
        highlightedId: action.payload.highlightedId,
      }
    case MapBoxActionTypes.SET_LAT_LNG:
      return {
        ...state,
        latLng: action.payload.latLng,
      }
    case MapBoxActionTypes.SET_SELECTED:
      return {
        ...state,
        selected: action.payload.selected,
      }
    case MapBoxActionTypes.SET_TYPE:
      return {
        ...state,
        type: action.payload.type,
      }
    case MapBoxActionTypes.SET_VIEWPORT:
      return {
        ...state,
        viewport: action.payload.viewport,
      }
    default:
      return state
  }
}
