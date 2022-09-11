import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'
import type { ILocation, IViewport } from '../../types/googleMap'

export interface GoogleMapState {
  address: string | null
  dialog: boolean
  highlightedId: string | null
  latLng: {
    lat: number
    lng: number
  }
  leftBoxView: 'createTrip' | 'createLocation' | 'locationsList' | string
  selected: ILocation | null
  type: string
  viewport: IViewport
  bounds: [number[], number[]] | []
  locationsAndTP: {
    total_locations: number
    locations: ILocation[]
  } | null
}

const SeeTheWholeMap = {
  center: {
    lat: 48.6,
    lng: 31.48,
  },
  zoom: 6,
}

const initialState: GoogleMapState = {
  address: null,
  dialog: false,
  highlightedId: null,
  latLng: {
    lat: 0,
    lng: 0,
  },
  leftBoxView: 'locationsList',
  selected: null,
  type: 'other',
  viewport: SeeTheWholeMap,
  bounds: [],
  locationsAndTP: null,
}

export const googleMapSlice = createSlice({
  name: 'googleMap',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload
    },
    setBounds: (state, action: PayloadAction<[number[], number[]] | []>) => {
      state.bounds = action.payload
    },
    setDialog: (state, action: PayloadAction<boolean>) => {
      state.dialog = action.payload
    },
    setHighlightedId: (state, action: PayloadAction<string | null>) => {
      state.highlightedId = action.payload
    },
    setLatLng: (state, action: PayloadAction<{ lat: number; lng: number }>) => {
      state.latLng = action.payload
    },
    setLeftBox: (
      state,
      action: PayloadAction<
        'createTrip' | 'createLocation' | 'locationsList' | string
      >
    ) => {
      state.leftBoxView = action.payload
    },
    setLocations: (
      state,
      action: PayloadAction<{
        total_locations: number
        locations: ILocation[]
      } | null>
    ) => {
      state.locationsAndTP = action.payload
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
    setViewportSeeMap: state => {
      state.viewport = SeeTheWholeMap
    },
  },
})

export const googleMapActions = googleMapSlice.actions

export const selectGoogleMap = (state: AppState) => state.layout

export default googleMapSlice.reducer
