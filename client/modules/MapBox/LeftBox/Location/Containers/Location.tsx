import React from 'react'
import { useQuery } from '@apollo/client'
import { Box, CircularProgress } from '@mui/material'
import { useTypedSelector } from '../../../../../store/hooks'
import { LocationComponent } from '../Components'
import { LOCATION } from '../../../../../apollo/queries/locations'

const Location: React.FC = () => {
  const { leftBox } = useTypedSelector(state => state.leftBox)
  const { loading, error, data } = useQuery(LOCATION, {
    variables: { locationID: leftBox },
  })

  if (!data || loading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <CircularProgress />
      </Box>
    )

  if (error) return <Box>Error</Box>

  return <LocationComponent data={data?.location} />
}

export default Location
