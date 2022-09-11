import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { Stack } from '@mui/material'
import { useActions, useTypedSelector } from '../../../hooks'
import { LeftBox, SeeTheWholeMap, SpeedDial, TopBar } from '../'
import { GoogleMapsComponent } from '../Components'
import { CircularProgress } from '../../'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

const libraries = ['places']
const widthLeftBox = '500'

const GoogleMaps: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY || '',
    language: 'uk',
    region: 'UA',
    // @ts-ignore
    libraries,
  })
  const mapRef = React.useRef()
  const { highlightedId, latLng, selected, type, viewport } = useTypedSelector(
    state => state.googleMap
  )
  const { setBounds } = useActions()
  const options = React.useMemo<MapOptions>(
    () => ({
      mapId: 'ac4b2fc37a6c12a8',
      disableDefaultUI: true,
    }),
    []
  )
  const onLoad = React.useCallback((map: any) => (mapRef.current = map), [])
  const bounds = () => {
    if (mapRef.current) {
      //@ts-ignore
      const getBounds = mapRef.current.getBounds()
      const Bb: { lo: number; hi: number } = getBounds.Bb
      const Va: { lo: number; hi: number } = getBounds.Va
      const bounds: [number[], number[]] = [
        [Bb.lo, Bb.hi],
        [Va.lo, Va.hi],
      ]
      setBounds(bounds)
    }
  }

  const onDragEnd = () => bounds()
  const onZoomChanged = () => bounds()

  return isLoaded ? (
    <Stack
      direction="row"
      position="relative"
      sx={{ height: 'calc(100vh - 64px)', width: '100%', marginTop: '64px' }}
    >
      <LeftBox widthLeftBox={widthLeftBox} />
      <TopBar widthLeftBox={widthLeftBox} />
      <GoogleMapsComponent
        latLng={latLng}
        options={options}
        onLoad={onLoad}
        onDragEnd={onDragEnd}
        onZoomChanged={onZoomChanged}
        mapRef={mapRef}
        viewport={viewport}
        widthLeftBox={widthLeftBox}
      />
      <SpeedDial />
      <SeeTheWholeMap />
    </Stack>
  ) : (
    <CircularProgress marginTop={2} />
  )
}

export default GoogleMaps
