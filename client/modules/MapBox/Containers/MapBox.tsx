import React, { useEffect } from 'react'
import { Stack } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useLazyQuery } from '@apollo/client'
import ReactMapGL from 'react-map-gl'
import { useActions, useTypedSelector } from '../../../hooks'
import { MapBoxComponent } from '../Components'
import { LeftBox, SearchBox, SeeTheWholeMap, SpeedDial, TopBar } from '../'
import { LOCATIONS } from '../../../apollo/queries/locations'
import { useLocalState } from '../../../hooks/useLocalState'

const widthLeftBox = '550'

const MapBox: React.FC = () => {
  const mapRef = React.useRef<ReturnType<typeof ReactMapGL> | null>(null)
  const { highlightedId, latLng, selected, type, viewport } = useTypedSelector(
    state => state.mapBox
  )
  const { setSelected, setViewport } = useActions()
  const [dataBounds, setDataBounds] = useLocalState<string>(
    'bounds',
    '[[0,0],[0,0]]'
  )
  const [locations, { loading, error, data }] = useLazyQuery(LOCATIONS)

  useEffect(() => {
    locations({
      variables: {
        input: { types: [], region: '', debounced: JSON.parse(dataBounds) },
      },
    })
  }, [dataBounds])

  return (
    <Stack direction="row" position="relative">
      <LeftBox
        widthLeftBox={widthLeftBox}
        data={data?.locations}
        loading={loading}
      />
      <TopBar widthLeftBox={widthLeftBox}>
        <SearchBox
          defaultValue=""
          onSelectAddress={(
            _address: string,
            latitude: null | number,
            longitude: null | number
          ) => {
            if (latitude && longitude) {
              setViewport({
                latitude,
                longitude,
                zoom: 12,
              })
              if (mapRef.current) {
                //@ts-ignore
                const bounds = mapRef.current.getMap().getBounds()
                setDataBounds(JSON.stringify(bounds.toArray()))
              }
            }
          }}
        />
      </TopBar>
      <MapBoxComponent
        widthLeftBox={widthLeftBox}
        viewport={viewport}
        mapRef={mapRef}
        locations={data?.locations.locations}
        highlightedId={highlightedId}
        latLng={latLng}
        selected={selected}
        type={type}
        setDataBounds={setDataBounds}
        setSelected={setSelected}
        setViewport={setViewport}
      />
      <SpeedDial />
      <SeeTheWholeMap />
    </Stack>
  )
}

export default MapBox
