import React from 'react'
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { MoreVert, Share } from '@mui/icons-material'
import { UserAvatar } from '../../../../Components'

interface IProps {
  md?: number
}

const CardComponent: React.FC<IProps> = ({ md }) => {
  return (
    <Grid item xs={12} sm={6} md={md || 3} p={1}>
      <Card sx={{ maxWidth: 345 }}>12313</Card>
    </Grid>
  )
}

export default CardComponent
