import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'
import type { ILocation, IViewport } from '../../types/mapBox'

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

export const mapBoxSlice = createSlice({
  name: 'mapBox',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload
    },
    setHighlightedId: (state, action: PayloadAction<string | null>) => {
      state.highlightedId = action.payload
    },
    setLatLng: (
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) => {
      state.latLng = action.payload
    },
    setSelected: (state, action: PayloadAction<ILocation | null>) => {
      state.selected = action.payload
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    setViewport: (state, action: PayloadAction<IViewport>) => {
      state.viewport = action.payload
    },
  },
})

export const mapBoxActions = mapBoxSlice.actions

export const selectMapBox = (state: AppState) => state.layout

export default mapBoxSlice.reducer
