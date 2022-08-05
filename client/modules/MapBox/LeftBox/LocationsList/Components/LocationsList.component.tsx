import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { LocalLibrary } from '@mui/icons-material'
import { LocationCard } from '../LocationCard'
import type { ILocation } from '../../../types/location'

interface IProps {
  data: {
    total_pages: number
    total_locations: number
    locations: ILocation[]
  }
}

const LocationsListComponent: React.FC<IProps> = ({
  data: { total_locations, locations },
}) => {
  return (
    <Box padding={2} height="100%" sx={{ overflowY: 'auto' }}>
      <Stack direction="row" alignItems="center">
        <LocalLibrary opacity={0.7} />
        <Typography marginLeft={1} variant="h6">
          Цікаві місця
        </Typography>
      </Stack>
      <Typography marginTop={1} variant="subtitle2">
        {`Знайдено ${total_locations} локацій`}
      </Typography>
      <Grid container spacing={2} marginTop={1}>
        {locations.map(i => {
          return <LocationCard key={i._id} item={i} />
        })}
      </Grid>
    </Box>
  )
}

export default LocationsListComponent
