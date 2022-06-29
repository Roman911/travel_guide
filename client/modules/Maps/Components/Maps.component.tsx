import React from "react"
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { Markers } from './'

type Props = {
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions
  onLoad: any
  settlement?: google.maps.LatLngLiteral
  locations?: {
    _id: string
    coordinates: string[]
    isType: string
  }[]
}

export const MapsComponents: React.FC<Props> = ({ center, options, onLoad, settlement, locations }) => {
  return <GoogleMap
    zoom={6}
    center={center}
    mapContainerStyle={{ width: '100%', height: 'calc(100vh - 64px)' }}
    options={options}
    onLoad={onLoad}
  >
    <Markers locations={locations} settlement={settlement} />
  </GoogleMap>
}