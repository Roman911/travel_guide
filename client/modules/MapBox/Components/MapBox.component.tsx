import React from 'react'
import ReactMapGL, {
  Layer,
  Marker,
  NavigationControl,
  ViewState,
  Source,
} from 'react-map-gl'
import { Popur } from '../'
import type { ILocation } from '../types'

import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from './layers'

interface IProps {
  widthLeftBox: string
  viewport: {
    latitude: number
    longitude: number
    zoom: number
  }
  mapRef: any
  locations?: ILocation[]
  highlightedId: string | null
  selected: ILocation | null
  setViewport: (arg: {
    viewport: {
      latitude: number
      longitude: number
      zoom: number
    }
  }) => void
  setDataBounds: (bounds: string) => void
  setSelected: (props: { selected: ILocation | null }) => void
}

const MapBoxComponent: React.FC<IProps> = ({
  widthLeftBox,
  viewport,
  mapRef,
  locations,
  highlightedId,
  selected,
  setViewport,
  setDataBounds,
  setSelected,
}) => {
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
        setViewport({ viewport: e.viewState })
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
      onClick={e => console.log(e)}
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
        return (
          <Marker
            key={i._id}
            latitude={i.latitude}
            longitude={i.longitude}
            offset={[0, -10]}
            style={
              highlightedId === i._id
                ? {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 10,
                    padding: '12px 8px 6px',
                    borderRadius: '50%',
                  }
                : { background: 'none', zIndex: 0 }
            }
          >
            <button
              onClick={() => setSelected({ selected: i })}
              style={{ border: 0, background: 'none', cursor: 'pointer' }}
            >
              <img
                src={`/static/images/${i.isType}${
                  highlightedId === i._id ? '-hover' : ''
                }.png`}
              />
            </button>
          </Marker>
        )
      })}
      {selected && <Popur selected={selected} setSelected={setSelected} />}
    </ReactMapGL>
  )
}

export default MapBoxComponent
