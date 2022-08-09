import React from 'react'
import ReactMapGL, {
  Layer,
  Marker,
  Popup,
  NavigationControl,
  ViewState,
  Source,
} from 'react-map-gl'

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
}

const MapBoxComponent: React.FC<IProps> = ({
  widthLeftBox,
  viewport,
  setViewport,
  mapRef,
  locations,
}) => {
  return (
    <ReactMapGL
      {...viewport}
      style={{ width: `calc(100% - ${widthLeftBox}px)`, height: '100vh' }}
      mapboxAccessToken={process.env.NEXT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onMove={evt => setViewport(evt.viewState)}
      ref={instance => (mapRef.current = instance)}
      minZoom={5}
      maxZoom={15}
    >
      <NavigationControl
        showCompass={false}
        position="top-left"
        style={{ marginTop: 150 }}
      />
      <Source
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
      </Source>
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
              style={{ border: 0, background: 'none', cursor: 'pointer' }}
            >
              <img src={'/static/images/little-known-places.png'} />
            </button>
          </Marker>
        )
      })}
    </ReactMapGL>
  )
}

export default MapBoxComponent
