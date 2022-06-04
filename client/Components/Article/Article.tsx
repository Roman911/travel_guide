import React from "react"
import { useRouter } from "next/router"
import { Box, Card, CardActions, CardActionArea, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { Chat, Favorite, MoreVert, Share, Visibility } from '@mui/icons-material'
import { useActions } from '../../store/hooks/useActions'
import { UserAvatar } from "../../modules"

type Props = {
  key: string
  item: {
    _id: string
    title: string
    cover: string
    small_text: string
  }
}

export const Article: React.FC<Props> = ({ item }) => {
  const { _id, title, cover, small_text } = item
  const router = useRouter()
  const { linearProgress } = useActions()

  const handleClick = React.useCallback(() => {
    linearProgress(true)
    router.push(`/post/${_id}`)
  }, [])

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
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="194"
          image={`http://localhost:3005/images${cover}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant='h6' color="text.secondary" sx={{ margin: '-8px 0 8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {small_text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Box display='flex' sx={{ alignItems: 'center', margin: '0 6px' }}>
          <Favorite fontSize="small" />
          <Typography variant="body1" marginLeft={0.7}>2</Typography>
        </Box>
        <Box display='flex' sx={{ alignItems: 'center', margin: '0 6px' }}>
          <Visibility fontSize="small" />
          <Typography variant="body1" marginLeft={0.7}>2</Typography>
        </Box>
        <Box display='flex' sx={{ alignItems: 'center', margin: '0 6px' }}>
          <Chat fontSize="small" />
          <Typography variant="body1" marginLeft={0.7}>2</Typography>
        </Box>
        <IconButton aria-label="share" sx={{ marginLeft: 'auto' }}>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
}