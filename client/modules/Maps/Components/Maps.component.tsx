import React from "react"
import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from '@react-google-maps/api'
import { Box, Grid, Paper, Typography } from '@mui/material'

type Props = {
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions
  onLoad: any
}

export const MapsComponents: React.FC<Props> = ({ center, options, onLoad }) => {
  return <GoogleMap
    zoom={6}
    center={center}
    mapContainerStyle={{ width: '100%', height: 'calc(100vh - 64px)' }}
    options={options}
    onLoad={onLoad}
  >

  </GoogleMap>
}