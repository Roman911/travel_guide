import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import type { ILocation } from '../../../../types/location'

interface IProps {
  item: ILocation
  handleClick: () => void
}

const LocationCardComponent: React.FC<IProps> = ({ item, handleClick }) => {
  return (
    <Grid item xs={6}>
      <Card onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image={`http://localhost:3005/images${item.cover.url}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {item.isType}
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              {item.title}
            </Typography>
            <Stack direction="row" alignItems="center">
              <LocationOn color="primary" />
              <Typography variant="body1" fontSize="12px">
                {item.address}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default LocationCardComponent
