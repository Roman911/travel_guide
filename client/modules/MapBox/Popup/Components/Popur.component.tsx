import React from 'react'
import { Popup } from 'react-map-gl'
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

interface IProps {
  selected: {
    _id: string
    isType: string
    coordinates: string[]
  }
  location?: {
    address: string
    title: string
    cover: {
      url: string
    }
  }
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
    <Popup
      latitude={Number(selected.coordinates[0])}
      longitude={Number(selected.coordinates[1])}
      closeOnClick={false}
      style={{ maxWidth: 250 }}
    >
      <Card sx={{ maxWidth: 250 }}>
        {location ? (
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={`http://localhost:3005/images${location.cover.url}`}
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
    </Popup>
  )
}

export default PopurComponent
