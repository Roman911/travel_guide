import React from 'react'
import { useRouter } from 'next/router'
import { Stack } from '@mui/material'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useLazyQuery } from '@apollo/react-hooks'
import { useActions } from '../../../store/hooks'
import { MapBoxComponent } from '../Components'
import { LeftBox, SearchBox, SpeedDial, TopBar } from '../'
import { LOCATIONS } from '../../../apollo/queries/locations'
import { useLocalState } from '../../../hooks/useLocalState'
import type { ILocation } from '../types'

const widthLeftBox = '550'

const MapBox: React.FC = () => {
  const router = useRouter()
  const mapRef = React.useRef(null)
  const [highlightedId, setHighlightedId] = React.useState<string | null>(null)
  const [selected, setSelected] = React.useState<ILocation | null>(null)
  const [dataBounds, setDataBounds] = useLocalState<string>(
    'bounds',
    '[[0,0],[0,0]]'
  )
  const [viewport, setViewport] = React.useState({
    latitude: 48.6,
    longitude: 31.48307,
    zoom: 5.5,
  })
  const { setLeftBox } = useActions()
  const [locations, { loading, error, data }] = useLazyQuery(LOCATIONS)

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
        setHighlightedId={setHighlightedId}
        setSelected={setSelected}
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
              setViewport(old => ({
                ...old,
                latitude,
                longitude,
                zoom: 12,
              }))
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
        setViewport={setViewport}
        mapRef={mapRef}
        locations={data?.locations.locations}
        setDataBounds={setDataBounds}
        highlightedId={highlightedId}
        selected={selected}
        setSelected={setSelected}
      />
      <SpeedDial />
    </Stack>
  )
}

export default MapBox
