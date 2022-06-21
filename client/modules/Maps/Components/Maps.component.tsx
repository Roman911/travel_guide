import React from "react"
import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from '@react-google-maps/api'
import { Box, Grid, Paper, Typography } from '@mui/material'

import mapStyles from '../styles/mapStyles'


export const MapsComponents: React.FC = () => {
  const center = React.useMemo(() => ({ lat: 49.026151, lng: 31.483070 }), [])

  return <Grid container height='calc(100vh - 64px)'>
    <Grid item xs={9}>
      <GoogleMap
      zoom={6}
      center={center}
      mapContainerStyle={{ width: '100%', height: 'calc(100vh - 64px)' }}
      //options={{ styles: mapStyles }}
      >

      </GoogleMap>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h6">
        Області
      </Typography>
    </Grid>
  </Grid>
}