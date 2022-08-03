import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Regions } from '../../../'

const TopBarComponent: React.FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: 'absolute',
        top: 63,
        width: 'calc(100% - 500px)',
        background: '#fff',
        right: 0,
        zIndex: 1,
        padding: 1,
      }}
    >
      <Regions width="33.3333%" />
      <Typography variant="h6">Filter</Typography>
      <Typography variant="h6">Search</Typography>
    </Stack>
  )
}

export default TopBarComponent
