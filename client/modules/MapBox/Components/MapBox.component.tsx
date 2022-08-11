import React from 'react'
import ReactMapGL, {
  Layer,
  Marker,
  NavigationControl,
  ViewState,
  Source,
} from 'react-map-gl'
import { Popur } from '../'

import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from './layers'

interface IProps {
  widthLeftBox: string
  viewport: any
  setViewport: (evt: ViewState) => void
  mapRef: any
  locations?: {
    _id: string
    isType: string
    coordinates: string[]
  }[]
  setDataBounds: (bounds: string) => void
}

const MapBoxComponent: React.FC<IProps> = ({
  widthLeftBox,
  viewport,
  setViewport,
  mapRef,
  locations,
  setDataBounds,
}) => {
  const [selected, setSelected] = React.useState(null)
  return (
    <ReactMapGL
      {...viewport}
      style={{
        width: `calc(100% - ${widthLeftBox}px)`,
        height: 'calc(100vh - 135px)',
        marginTop: '135px',
      }}
      mapboxAccessToken={process.env.NEXT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onMove={e => {
        setViewport(e.viewState)
        const bounds = mapRef.current.getMap().getBounds()
        setDataBounds(JSON.stringify(bounds.toArray()))
      }}
      ref={instance => (mapRef.current = instance)}
      minZoom={5}
      maxZoom={15}
      onLoad={() => {
        if (mapRef.current) {
          const bounds = mapRef.current.getMap().getBounds()
          setDataBounds(JSON.stringify(bounds.toArray()))
        }
      }}
    >
      <NavigationControl showCompass={false} position="top-left" />
      {/*<Source
        id="earthquakes"
        type="geojson"
        data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer}>
          <img src={'/static/images/little-known-places.png'} />
        </Layer>
    </Source>*/}
      {locations?.map(i => {
        const [lat, long] = i.coordinates
        return (
          <Marker
            key={i._id}
            latitude={Number(lat)}
            longitude={Number(long)}
            offset={[0, -10]}
          >
            <button
              onClick={() => setSelected(i)}
              style={{ border: 0, background: 'none', cursor: 'pointer' }}
            >
              <img src={`/static/images/${i.isType}.png`} />
            </button>
          </Marker>
        )
      })}
      {selected && <Popur selected={selected} setSelected={setSelected} />}
    </ReactMapGL>
  )
}

export default MapBoxComponent
