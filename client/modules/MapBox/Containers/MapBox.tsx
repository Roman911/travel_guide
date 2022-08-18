import React from 'react'
import { useRouter } from 'next/router'
import { Stack } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useLazyQuery } from '@apollo/react-hooks'
import { useActions, useTypedSelector } from '../../../store/hooks'
import { MapBoxComponent } from '../Components'
import { LeftBox, SearchBox, SpeedDial, TopBar } from '../'
import { LOCATIONS } from '../../../apollo/queries/locations'
import { useLocalState } from '../../../hooks/useLocalState'

const widthLeftBox = '550'

const MapBox: React.FC = () => {
  const router = useRouter()
  const mapRef = React.useRef(null)
  const { highlightedId, latLng, selected, type, viewport } = useTypedSelector(
    state => state.mapBox
  )
  const { setLeftBox, setSelected, setViewport } = useActions()
  const [dataBounds, setDataBounds] = useLocalState<string>(
    'bounds',
    '[[0,0],[0,0]]'
  )
  const [locations, { loading, error, data }] = useLazyQuery(LOCATIONS)

  console.log(viewport)

  React.useEffect(() => {
    locations({
      variables: {
        input: { types: [], region: '', debounced: JSON.parse(dataBounds) },
      },
    })
  }, [dataBounds])

  React.useEffect(() => {
    if (router.query.id) {
      const id = Array.isArray(router.query.id)
        ? router.query.id[0]
        : router.query.id
      setLeftBox(id)
    }
  }, [router])

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
                viewport: {
                  latitude,
                  longitude,
                  zoom: 12,
                },
              })
              if (mapRef.current) {
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
    </Stack>
  )
}

export default MapBox
