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

const LocationCardComponent: React.FC = () => {
  return (
    <Grid item xs={6}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            image="http://localhost:3005/images/c5bdxeMLOtRMiv.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Палац
            </Typography>
            <Typography gutterBottom variant="subtitle2">
              Гора Пивиха
            </Typography>
            <Stack direction="row" alignItems="center">
              <LocationOn color="primary" />
              <Typography variant="body1" fontSize="12px">
                смт Градизьк, Глобинський район, Полтавська область
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default LocationCardComponent
