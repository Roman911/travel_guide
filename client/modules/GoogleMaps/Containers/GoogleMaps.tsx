import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { Stack } from '@mui/material'
import { useLazyQuery } from '@apollo/client'
import { useTypedSelector } from '../../../hooks'
import { LeftBox, SeeTheWholeMap, SpeedDial, TopBar } from '../'
import { GoogleMapsComponent } from '../Components'
import { CircularProgress } from '../../'
import { LOCATIONS } from '../../../apollo/queries/locations'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

const libraries = ['places']
const widthLeftBox = '550'

const GoogleMaps: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    language: 'uk',
    region: 'UA',
    // @ts-ignore
    libraries,
  })
  const mapRef = React.useRef()
  const { highlightedId, latLng, selected, type, viewport } = useTypedSelector(
    state => state.googleMap
  )
  const [locations, { loading, error, data }] = useLazyQuery(LOCATIONS)
  const options = React.useMemo<MapOptions>(
    () => ({
      mapId: 'ac4b2fc37a6c12a8',
      disableDefaultUI: true,
    }),
    []
  )
  const onLoad = React.useCallback((map: any) => (mapRef.current = map), [])
  const onDragEnd = () => {
    if (mapRef.current) {
      //@ts-ignore
      console.log(mapRef.current.getBounds())
    }
  }
  const onZoomChanged = () => {
    if (mapRef.current) {
      //@ts-ignore
      console.log(mapRef.current.getBounds())
    }
  }

  return isLoaded ? (
    <Stack
      direction="row"
      position="relative"
      sx={{ height: 'calc(100vh - 64px)', width: '100%', marginTop: '64px' }}
    >
      <LeftBox
        widthLeftBox={widthLeftBox}
        data={data?.locations}
        loading={loading}
      />
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
