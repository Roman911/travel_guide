import React from 'react'
import { Button, Stack } from '@mui/material'
import { Tune } from '@mui/icons-material'
import { Regions } from '../../../'
import { SearchBox } from '../SearchBox'

interface IProps {
  mapRef: any
  setSettlement: any
  theme: 'light' | 'dark'
}

const TopBarComponent: React.FC<IProps> = ({
  mapRef,
  setSettlement,
  theme,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{
        position: 'absolute',
        top: 64,
        width: 'calc(100% - 500px)',
        backgroundColor: theme === 'dark' ? '#1A2027' : '#fff',
        right: 0,
        zIndex: 1,
        padding: 1,
      }}
    >
      <Regions width="33.3333%" />
      <SearchBox
        setSettlement={position => {
          setSettlement(position), mapRef.current?.panTo(position)
        }}
      />
      <Button
        sx={{ width: '33.3333%', padding: '14px 0' }}
        variant="outlined"
        size="large"
        endIcon={<Tune />}
      >
        Filter
      </Button>
    </Stack>
  )
}

export default TopBarComponent
