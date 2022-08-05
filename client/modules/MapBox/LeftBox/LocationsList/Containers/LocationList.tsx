import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { Box, CircularProgress } from '@mui/material'
import { LocationsListComponent } from '../Components'
import { LOCATIONS_AND_PARAMS } from '../../../../../apollo/queries/locations'

const LocationsList: React.FC = () => {
  const [locationsAndParams, { loading, error, data }] =
    useLazyQuery(LOCATIONS_AND_PARAMS)

  React.useEffect(() => {
    locationsAndParams({
      variables: {
        input: {
          page: 1,
          limit: 12,
          types: [],
        },
      },
    })
  }, [])

  if (!data || loading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <CircularProgress />
      </Box>
    )

  if (error) return <Box>Error</Box>

  return <LocationsListComponent data={data?.locationsAndParams} />
}

export default LocationsList
