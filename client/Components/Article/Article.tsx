import React from "react"
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { Chat, Favorite, MoreVert, Share, Visibility } from '@mui/icons-material'
import { UserAvatar } from "../../modules"

export const Article: React.FC = () => {
  return <Grid item xs={12} sm={6} md={3} p={1}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<UserAvatar size={40} />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Роман Лисик"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image='https://ukrpublic.com/images/2020/12/24/turbo-image_large.jpg'
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite fontSize="small" />
          <Typography variant="body1" marginLeft={0.7}>2</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Visibility fontSize="small" />
          <Typography variant="body1" marginLeft={0.7}>2</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Chat fontSize="small" />
          <Typography variant="body1" marginLeft={0.7}>2</Typography>
        </IconButton>
        <IconButton aria-label="share" sx={{ marginLeft: 'auto' }}>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
}