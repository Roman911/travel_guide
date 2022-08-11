import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { LocalLibrary } from '@mui/icons-material'
import { LocationCard } from '../LocationCard'
import type { ILocation } from '../../../types/location'

interface IProps {
  data?: {
    total_locations: number
    locations: ILocation[]
  }
}

const LocationsListComponent: React.FC<IProps> = ({ data }) => {
  return (
    <Box padding={2} height="100%" sx={{ overflowY: 'auto' }}>
      <Stack direction="row" alignItems="center">
        <LocalLibrary opacity={0.7} />
        <Typography marginLeft={1} variant="h6">
          Цікаві місця
        </Typography>
      </Stack>
      <Typography marginTop={1} variant="subtitle2">
        {`Знайдено ${data?.total_locations} локацій`}
      </Typography>
      <Grid container spacing={2} marginTop={1}>
        {data?.locations.map(i => {
          return <LocationCard key={i._id} item={i} />
        })}
      </Grid>
    </Box>
  )
}

export default LocationsListComponent
