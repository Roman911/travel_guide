import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { LocalLibrary } from '@mui/icons-material'
import { LocationCard } from '../LocationCard'

const locations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const LocationsListComponent: React.FC = () => {
  return (
    <Box padding={2} height="100%" sx={{ overflowY: 'auto' }}>
      <Stack direction="row" alignItems="center">
        <LocalLibrary opacity={0.7} />
        <Typography marginLeft={1} variant="h6">
          Цікаві місця
        </Typography>
      </Stack>
      <Typography marginTop={1} variant="subtitle2">
        Знайдено 1772 локацій
      </Typography>
      <Grid container spacing={2} marginTop={1}>
        {locations.map(i => {
          return <LocationCard key={i} />
        })}
      </Grid>
    </Box>
  )
}

export default LocationsListComponent
