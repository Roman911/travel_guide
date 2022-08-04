import React from 'react'
import { Stack } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapBoxComponent } from '../Components'
import { LeftBox, SearchBox, SpeedDial, TopBar } from '../'

const MapBox: React.FC = () => {
  const mapRef = React.useRef(null)
  const [viewport, setViewport] = React.useState({
    latitude: 49,
    longitude: 30,
    zoom: 5.3,
  })

  return (
    <Stack direction="row" position="relative">
      <LeftBox />
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
