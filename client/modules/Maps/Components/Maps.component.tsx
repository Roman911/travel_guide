import React from "react"
import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from '@react-google-maps/api'
import { Box, Grid, Typography } from '@mui/material'



export const MapsComponents: React.FC = () => {
  const center = React.useMemo(() => ({ lat: 43, lng: -80 }), [])

  return <Grid container height='calc(100vh - 64px)' sx={{ border: '1px solid red' }}>
    <Grid item xs={10} sx={{ border: '1px solid red' }}>
      <GoogleMap zoom={10} center={center} mapContainerStyle={{ width: '100%', height: 'calc(100vh - 64px)' }}>

      </GoogleMap>
    </Grid>
    <Grid item xs={2} sx={{ border: '1px solid red' }}>
      13213
    </Grid>
  </Grid>
}