import React from 'react'
import Image from 'next/image'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { Close, LocationOn, MyLocation } from '@mui/icons-material'
import type { ILocation } from '../../../types/location'

interface IProps {
  location: ILocation
  widthLeftBox: string
  handleClick: () => void
}

const LocationComponent: React.FC<IProps> = ({
  location,
  widthLeftBox,
  handleClick,
}) => {
  return (
    <Box position="relative" sx={{ overflowY: 'auto', height: '100%' }}>
      <IconButton
        onClick={handleClick}
        color="secondary"
        sx={{
          marginTop: 0,
          position: 'absolute',
          top: 14,
          right: 1,
        }}
      >
        <Close />
      </IconButton>
      <Typography
        variant="h5"
        textAlign="center"
        marginTop={2}
        marginBottom={2}
        color="text.secondary"
      >
        {location.title}
      </Typography>
      <Image
        src={`/${location.cover}l.webp`}
        layout="intrinsic"
        alt={location.title}
        width={`${widthLeftBox}px`}
        height={300}
      />
      <Stack
        spacing={2}
        padding="0 20px 20px"
        sx={{ borderBottom: '1px solid grey' }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          {location.isType}
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="text.secondary">
          {location.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {location.small_text}
        </Typography>
      </Stack>
      <Stack spacing={2} padding="20px 20px 0">
        <Stack spacing={1} direction="row">
          <LocationOn color="primary" />
          <Typography variant="subtitle2" color="text.secondary">
            {location.address}
          </Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <MyLocation color="primary" />
          <Typography variant="subtitle2" color="text.secondary">
            {`${location.latitude}, ${location.longitude}`}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default LocationComponent
