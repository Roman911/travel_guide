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
  viewport: IViewport
  highlightedId: string | null
  selected: ILocation | null
}

export enum MapBoxActionTypes {
  SET_VIEWPORT = 'MAP_BOX:SET_VIEWPORT',
  SET_HIGHLIGHTED_ID = 'MAP_BOX:SET_HIGHLIGHTED_ID',
  SET_SELECTED = 'MAP_BOX:SET_SELECTED',
}

interface SetViewportAction {
  type: MapBoxActionTypes.SET_VIEWPORT
  payload: { viewport: IViewport }
}

interface SetHighlightedIdAction {
  type: MapBoxActionTypes.SET_HIGHLIGHTED_ID
  payload: { highlightedId: string | null }
}

interface SetSelectedAction {
  type: MapBoxActionTypes.SET_SELECTED
  payload: { selected: ILocation | null }
}

export type MapBoxAction =
  | SetViewportAction
  | SetHighlightedIdAction
  | SetSelectedAction
