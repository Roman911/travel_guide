import React from "react"
import { GoogleMap } from '@react-google-maps/api'
import { Grid } from '@mui/material'
import { MapsComponents } from '../Components'
import { Places, RightMenu } from './'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

export const MapsContainer: React.FC = () => {
  const [settlement, setSettlement] = React.useState<LatLngLiteral>()
  const mapRef = React.useRef<GoogleMap>()
  const center = React.useMemo<LatLngLiteral>(() => ({ lat: 49.026151, lng: 31.483070 }), [])
  const options = React.useMemo<MapOptions>(() => ({
    mapId: "ac4b2fc37a6c12a8",
    disableDefaultUI: true,
    clickableIcons: false
  }), [])

  const onLoad = React.useCallback((map: any) => (mapRef.current = map), [])

  return <Grid marginTop='80px' container height='calc(100vh - 80px)'>
    <Grid item xs={10}>
      <MapsComponents options={options} center={center} onLoad={onLoad} settlement={settlement} />
    </Grid>
    <Grid item xs={2}>
      <RightMenu >
        <Places setSettlement={position => {
          setSettlement(position),
            mapRef.current?.panTo(position)
        }} />
      </RightMenu>
    </Grid>
  </Grid>
}