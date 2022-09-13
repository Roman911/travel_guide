import React from 'react'
import { Stack } from '@mui/material'
import { GoogleMaps, LeftBox, SeeTheWholeMap, SpeedDial, TopBar } from '../../'

const widthLeftBox = '500'

const MapWrapperComponent: React.FC = () => {
  return (
    <Stack
      direction="row"
      position="relative"
      sx={{ height: 'calc(100vh - 64px)', width: '100%', marginTop: '64px' }}
    >
      <LeftBox widthLeftBox={widthLeftBox} />
      <TopBar widthLeftBox={widthLeftBox} />
      <GoogleMaps width={`calc(100% - ${widthLeftBox}px)`} />
      <SpeedDial />
      <SeeTheWholeMap />
    </Stack>
  )
}

export default MapWrapperComponent
