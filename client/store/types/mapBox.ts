export interface ILocation {
  _id: string
  title: string
  small_text: string
  latitude: number
  longitude: number
  isType: string
  address: string
  cover: {
    url: string
  }
}

export interface IViewport {
  latitude: number
  longitude: number
  zoom: number
}

export interface MapBoxState {
  address: string | null
  highlightedId: string | null
  latLng: {
    latitude: number
    longitude: number
  }
  selected: ILocation | null
  type: string
  viewport: IViewport
}

export enum MapBoxActionTypes {
  SET_ADDRESS = 'MAP_BOX:SET_ADDRESS',
  SET_HIGHLIGHTED_ID = 'MAP_BOX:SET_HIGHLIGHTED_ID',
  SET_LAT_LNG = 'MAP_BOX:SET_LAT_LNG',
  SET_SELECTED = 'MAP_BOX:SET_SELECTED',
  SET_TYPE = 'MAP_BOX:SET_TYPE',
  SET_VIEWPORT = 'MAP_BOX:SET_VIEWPORT',
}

interface SetAddressAction {
  type: MapBoxActionTypes.SET_ADDRESS
  payload: { address: string | null }
}

interface SetHighlightedIdAction {
  type: MapBoxActionTypes.SET_HIGHLIGHTED_ID
  payload: { highlightedId: string | null }
}

interface SetLatLngAction {
  type: MapBoxActionTypes.SET_LAT_LNG
  payload: { latLng: { latitude: number; longitude: number } }
}

interface SetSelectedAction {
  type: MapBoxActionTypes.SET_SELECTED
  payload: { selected: ILocation | null }
}

interface SetTypeAction {
  type: MapBoxActionTypes.SET_TYPE
  payload: { type: string }
}

interface SetViewportAction {
  type: MapBoxActionTypes.SET_VIEWPORT
  payload: { viewport: IViewport }
}

export type MapBoxAction =
  | SetAddressAction
  | SetHighlightedIdAction
  | SetLatLngAction
  | SetSelectedAction
  | SetTypeAction
  | SetViewportAction
