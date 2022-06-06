import React from "react"
import { useRouter } from "next/router"
import { Box, Card, CardActions, CardActionArea, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { Chat, Favorite, MoreVert, Share, Visibility } from '@mui/icons-material'
import { useActions } from '../../store/hooks/useActions'
import { UserAvatar } from "../../modules"
import { useDate } from '../../hooks/useDate'

type Props = {
  key: string
  usedId?: string
  item: {
    _id: string
    title: string
    cover: string
    small_text: string
    views: number
    likes: string[]
    createdAt: string
    author: {
      name: string
      avatar?: string
    }
  }
}

export const Article: React.FC<Props> = ({ item, usedId }) => {
  const { _id, title, cover, small_text, views, likes, createdAt, author: { name, avatar } } = item
  const router = useRouter()
  const { linearProgress } = useActions()

  const color = usedId && likes.includes(usedId) ? '#db4454' : ''

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
        title={name}
        subheader={useDate({ serverDate: createdAt, format: 'LL' })}
      />
      <CardActionArea onClick={handleClick} >
        <CardMedia
          component="img"
          height="194"
          image={`http://localhost:3005/images${cover}`}
          alt="Paella dish"
        />
        <CardContent sx={{ paddingBottom: '8px' }}>
          <Typography variant='h6' color="text.secondary" sx={{ margin: '-8px 0 8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {small_text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ paddingTop: 0 }}>
        <Box display='flex' sx={{ alignItems: 'center', margin: '0 6px' }}>
          <Favorite fontSize="small" sx={{ color: color }} />
          <Typography variant="body1" marginLeft={0.7}>{likes.length !== 0 && likes.length}</Typography>
        </Box>
        <Box display='flex' sx={{ alignItems: 'center', margin: '0 6px' }}>
          <Visibility fontSize="small" />
          <Typography variant="body1" marginLeft={0.7}>{views}</Typography>
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