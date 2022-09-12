import React from 'react'
import { GoogleMap } from '@react-google-maps/api'
import { Marker, Popur } from '../'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

interface IProps {
  options: MapOptions
  onLoad: (map: any) => void
  onDragEnd: () => void
  onZoomChanged: () => void
  mapRef: any
  viewport: {
    center: {
      lat: number
      lng: number
    }
    zoom: number
  }
  widthLeftBox: string
}

const GoogleMapsComponent: React.FC<IProps> = ({
  options,
  onLoad,
  onDragEnd,
  onZoomChanged,
  mapRef,
  viewport,
  widthLeftBox,
}) => {
  const containerStyle = {
    width: `calc(100% - ${widthLeftBox}px)`,
    height: '100%',
  }

  return (
    <GoogleMap
      {...viewport}
      ref={mapRef}
      mapContainerStyle={containerStyle}
      onLoad={onLoad}
      onDragEnd={onDragEnd}
      onZoomChanged={onZoomChanged}
      options={options}
    >
      <Marker />
      <Popur />
    </GoogleMap>
  )
}

export default GoogleMapsComponent
