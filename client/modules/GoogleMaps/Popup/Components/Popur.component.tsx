import React from 'react'
import {
  GoogleMap,
  DirectionsRenderer,
  InfoWindow,
} from '@react-google-maps/api'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import type { ILocation } from '../../../../types/googleMap'

interface IProps {
  selected: ILocation | null
  location?: ILocation
  closeOnClick: () => void
  editOnClick: () => void
}

const PopurComponent: React.FC<IProps> = ({
  selected,
  location,
  closeOnClick,
  editOnClick,
}) => {
  return (
    <InfoWindow
      position={{ lat: 0, lng: 0 }}
      latitude={selected ? selected.latitude : 0}
      longitude={selected ? selected.longitude : 0}
      closeOnClick={false}
      maxWidth="250px"
      offset={46}
    >
      <Card sx={{ maxWidth: 250 }}>
        {location ? (
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={`${process.env.NEXT_APP_HOST_API}images/${location.cover}m.webp`}
          />
        ) : (
          <Skeleton variant="rectangular" width={250} height={140} />
        )}
        <CardContent>
          {location ? (
            <>
              <Typography gutterBottom marginBottom={1} variant="subtitle2">
                {location?.title}
              </Typography>
              <Stack direction="row" alignItems="center">
                <LocationOn color="primary" />
                <Typography variant="body1" fontSize="12px">
                  {location?.address}
                </Typography>
              </Stack>
            </>
          ) : (
            <>
              <Skeleton />
              <Skeleton height={50} />
            </>
          )}
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={closeOnClick} size="small">
            Закрити
          </Button>
          <Button onClick={editOnClick} size="small">
            Більше
          </Button>
        </CardActions>
      </Card>
    </InfoWindow>
  )
}

export default PopurComponent
