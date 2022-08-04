import React from 'react'
import { Stack } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapBoxComponent } from '../Components'
import { LocationsList } from '../LocationsList'
import { SpeedDial } from '../SpeedDial'
import { TopBar } from '../TopBar'
import { SearchBox } from '../SearchBox'

const MapBox: React.FC = () => {
  const mapRef = React.useRef(null)
  //const [settlement, setSettlement] = React.useState()
  const [viewport, setViewport] = React.useState({
    latitude: 49,
    longitude: 30,
    zoom: 5.3,
  })

  console.log(viewport)

  return (
    <Stack direction="row" position="relative">
      <LocationsList />
      <TopBar>
        <SearchBox
          defaultValue=""
          onSelectAddress={(
            _address: string,
            latitude: null | number,
            longitude: null | number
          ) => {
            if (latitude && longitude) {
              setViewport(old => ({
                ...old,
                latitude,
                longitude,
                zoom: 12,
              }))
              if (mapRef.current) {
                //const bounds = mapRef.current.getMap().getBounds()
                //setDataBounds(JSON.stringify(bounds.toArray()))
              }
            }
          }}
        />
      </TopBar>
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
