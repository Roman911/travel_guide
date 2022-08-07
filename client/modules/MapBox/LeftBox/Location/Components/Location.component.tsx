import React from 'react'
import Image from 'next/image'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { Close, LocationOn, MyLocation } from '@mui/icons-material'
import type { ILocation } from '../../../types/location'

interface IProps {
  data: ILocation
  widthLeftBox: string
  handleClick: () => void
}

const LocationComponent: React.FC<IProps> = ({
  data,
  widthLeftBox,
  handleClick,
}) => {
  console.log(data)

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
        variant="h6"
        textAlign="center"
        marginTop={2}
        marginBottom={2}
        color="text.secondary"
      >
        {data.title}
      </Typography>
      <Image
        src={data.cover.url}
        layout="intrinsic"
        alt={data.title}
        width={`${widthLeftBox}px`}
        height={300}
      />
      <Stack
        spacing={2}
        padding="0 20px 20px"
        sx={{ borderBottom: '1px solid grey' }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          {data.isType}
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="text.secondary">
          {data.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {data.small_text}
        </Typography>
      </Stack>
      <Stack spacing={2} padding="20px 20px 0">
        <Stack spacing={1} direction="row">
          <LocationOn color="primary" />
          <Typography variant="subtitle2" color="text.secondary">
            {data.address}
          </Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <MyLocation color="primary" />
          <Typography variant="subtitle2" color="text.secondary">
            {`${data.coordinates[0]}, ${data.coordinates[1]}`}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default LocationComponent
