import type { IPost } from '../../types'
import React from 'react'
import { useRouter } from 'next/router'
import {
  Box,
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
import {
  Chat,
  Favorite,
  MoreVert,
  Share,
  Visibility,
} from '@mui/icons-material'
import { useActions } from '../../store/hooks'
import { UserAvatar } from '..'
import { useColors, useDate } from '../../hooks'

type Props = {
  usedId?: string
  item: IPost
}

export const ArticleCard: React.FC<Props> = ({ item, usedId }) => {
  const {
    _id,
    title,
    cover,
    small_text,
    views,
    likes,
    createdAt,
    author: { name, avatar },
  } = item
  const router = useRouter()
  const { linearProgress } = useActions()
  const { icon, red } = useColors()
  const color = usedId && likes.includes(usedId) ? red : icon

  const handleClick = React.useCallback(() => {
    linearProgress(true)
    router.push(`/post/${_id}`)
  }, [])

  console.log('render: Components, ArticleCard', name)

  return (
    <Grid item xs={12} sm={6} md={3} p={1}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<UserAvatar size={40} userData={{ name, avatar }} />}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader={useDate({ serverDate: createdAt, format: 'LL' })}
        />
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="194"
            image={`http://localhost:3005/images${cover}`}
            alt="Paella dish"
          />
          <CardContent sx={{ paddingBottom: '8px' }}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                margin: '-8px 0 8px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: '4',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {small_text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing sx={{ paddingTop: 0 }}>
          <Box
            display="flex"
            sx={{ alignItems: 'center', marginLeft: '6px', color: icon }}
          >
            <Favorite fontSize="small" sx={{ color: color }} />
            <Typography variant="body2" marginLeft={0.2}>
              {likes.length !== 0 && likes.length}
            </Typography>
          </Box>
          <Box
            display="flex"
            sx={{ alignItems: 'center', marginLeft: '6px', color: icon }}
          >
            <Visibility fontSize="small" />
            <Typography variant="body2" marginLeft={0.2}>
              {views}
            </Typography>
          </Box>
          <Box
            display="flex"
            sx={{ alignItems: 'center', marginLeft: '6px', color: icon }}
          >
            <Chat fontSize="small" />
            <Typography variant="body2" marginLeft={0.2}>
              2
            </Typography>
          </Box>
          <IconButton
            aria-label="share"
            sx={{ marginLeft: 'auto', color: icon }}
          >
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}
