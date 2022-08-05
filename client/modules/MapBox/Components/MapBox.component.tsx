import React from 'react'
import ReactMapGL, { Marker, Popup, ViewState } from 'react-map-gl'

interface IProps {
  widthLeftBox: string
  viewport: any
  setViewport: (evt: ViewState) => void
  mapRef: any
}

const MapBoxComponent: React.FC<IProps> = ({
  widthLeftBox,
  viewport,
  setViewport,
  mapRef,
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
    />
  )
}

export default MapBoxComponent
