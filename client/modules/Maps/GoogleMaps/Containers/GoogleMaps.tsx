import React from 'react'
import { GoogleMap } from '@react-google-maps/api'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@mui/material'
import { GoogleMapsComponents } from '../Components'
import { Drawer, RightMenu, SpeedDial } from '../../'
import { ALL_LOCATIONS } from '../../../../apollo/queries/locations'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

export const GoogleMaps: React.FC = () => {
  const [settlement, setSettlement] = React.useState<LatLngLiteral>()
  const { loading, error, data } = useQuery(ALL_LOCATIONS)
  const mapRef = React.useRef<GoogleMap>()
  const center = React.useMemo<LatLngLiteral>(
    () => ({ lat: 49.026151, lng: 31.48307 }),
    []
  )
  const options = React.useMemo<MapOptions>(
    () => ({
      mapId: 'ac4b2fc37a6c12a8',
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  )

  const onLoad = React.useCallback((map: any) => (mapRef.current = map), [])

  return (
    <Grid marginTop="80px" container height="calc(100vh - 80px)">
      <Grid item xs={10}>
        <GoogleMapsComponents
          options={options}
          center={center}
          onLoad={onLoad}
          settlement={settlement}
          locations={data?.locations}
        />
        <Drawer />
        <SpeedDial />
      </Grid>
      <Grid item xs={2}>
        132
      </Grid>
    </Grid>
  )
}
