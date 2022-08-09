import React from 'react'
import { Stack } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useLazyQuery } from '@apollo/react-hooks'
import { MapBoxComponent } from '../Components'
import { LeftBox, SearchBox, SpeedDial, TopBar } from '../'
import { ALL_LOCATIONS } from '../../../apollo/queries/locations'

const widthLeftBox = '550'

const MapBox: React.FC = () => {
  const mapRef = React.useRef(null)
  const [locations, { loading, error, data }] = useLazyQuery(ALL_LOCATIONS)
  const [viewport, setViewport] = React.useState({
    latitude: 49,
    longitude: 30,
    zoom: 5.3,
  })

  React.useEffect(() => {
    locations({ variables: { input: { types: [] } } })
  }, [])

  return (
    <Stack direction="row" position="relative">
      <LeftBox widthLeftBox={widthLeftBox} />
      <TopBar widthLeftBox={widthLeftBox}>
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
        widthLeftBox={widthLeftBox}
        viewport={viewport}
        setViewport={setViewport}
        mapRef={mapRef}
        locations={data?.locations}
      />
      <SpeedDial />
    </Stack>
  )
}

export default MapBox
