import React from 'react'
import Image from 'next/image'
import {
  Box,
  CardHeader,
  Breadcrumbs,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import { useDate } from '../../../../../hooks'
import { Avatar } from '../../../../'
import { TripInfo } from '../../../../Posts/Card'

interface IProps {
  trip: {
    title: string
    cover: string
    createdAt: string
    small_text: string
    author: {
      name: string
      avatar?: string
    }
    trip_value: {
      distance: number
      travel_time: number
      waypoints: number
    }
  }
  widthLeftBox: string
}

const TripComponent: React.FC<IProps> = ({ trip, widthLeftBox }) => {
  const { author, cover, createdAt, small_text, title, trip_value } = trip

  return (
    <Box position="relative" sx={{ overflowY: 'auto', height: '100%' }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ padding: 2 }}>
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      <Typography
        variant="h5"
        textAlign="center"
        marginBottom={2}
        color="text.secondary"
      >
        {title}
      </Typography>
      <Image
        src={`/${cover}l.webp`}
        layout="intrinsic"
        alt={trip.title}
        width={`${widthLeftBox}px`}
        height={300}
      />
      <Stack
        spacing={2}
        padding="20px 20px 10px"
        sx={{ borderBottom: '1px solid grey' }}
      >
        <Typography variant="body1" color="text.secondary">
          {small_text}
        </Typography>
        <CardHeader
          avatar={
            <Avatar
              size={40}
              userData={{ name: author.name, avatar: author.avatar }}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={author.name}
          subheader={useDate({ serverDate: createdAt, format: 'LL' })}
        />
        <TripInfo trip_value={trip_value} isCard={false} />
      </Stack>
    </Box>
  )
}

export default TripComponent
