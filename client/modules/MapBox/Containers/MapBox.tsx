import React from 'react'
import { Stack } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapBoxComponent } from '../Components'
import { LocationsList } from '../LocationsList'
import { SpeedDial } from '../SpeedDial'
import { TopBar } from '../TopBar'

const MapBox: React.FC = () => {
  const mapRef = React.useRef(null)
  const [settlement, setSettlement] = React.useState()
  const [viewport, setViewport] = React.useState({
    latitude: 49,
    longitude: 30,
    zoom: 5.3,
  })

  return (
    <Stack direction="row" position="relative">
      <LocationsList />
      <TopBar mapRef={mapRef} setSettlement={setSettlement} />
      <MapBoxComponent
        viewport={viewport}
        setViewport={setViewport}
        mapRef={mapRef}
      />
      <SpeedDial />
    </Stack>
  )
}

export default MapBox
