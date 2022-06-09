import React from "react"
import Image from "next/image"
import { Box, Container, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import { Facebook, Favorite, Share, Twitter, Visibility } from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link'
import { useInView } from 'react-intersection-observer'
import { useDate } from '../../hooks/useDate'
import { Comments } from '../../modules'
import { Tags, MyStepper, UserAvatar } from '../'

type Props = {
  post: {
    title: string
    tags: string[]
    small_text: string
    cover: string
    editor: string
    link: string
    likes: string[]
    views: number
    createdAt: string
    author: {
      name: string
      avatar?: string
      rating?: number
    }
  }
  userData: null | {
    id: string
  }
}

const steps = [
  { label: 'Історичні факти Підгорецького замку' },
  { label: 'Період найбільшого розквіту Підгорецького замку' },
  { label: 'Період занепаду замку' },
  { label: 'Світлий день в історії замку' },
  { label: 'Легенда Підгорецької фортеці' }
]

export const PostComponent: React.FC<Props> = ({ post, userData }) => {
  const { title, tags, small_text, cover, editor, link, likes, views, author, createdAt } = post
  const color = userData?.id && likes.includes(userData.id) ? '#db4454' : ''
  const { ref, inView } = useInView({ threshold: 0 })
  const style = inView ? { position: 'absolute', top: 'auto' } : { position: 'fixed', top: '100px' }

  return <Container >
    <Stack marginTop={10} flexDirection='row' alignItems='center' justifyContent='space-between'>
      <Box>
        <Typography ref={ref} variant='h3' sx={{ color: '#404040' }}>
          {title}
        </Typography>
        <Tags tags={tags} />
      </Box>
      <Typography variant='body2' sx={{ borderRight: '2px solid rgba(0, 0, 0, 0.87)', padding: '4px 6px 4px 0' }}>
        {useDate({ serverDate: createdAt })}
      </Typography>
    </Stack>
    <Grid container marginTop={2}>
      <Grid item xs={1} marginTop={3} sx={{ position: 'relative' }}>
        <Stack sx={{ ...style }}>
          <IconButton sx={{ width: '40px', margin: '5px auto' }}>
            <Favorite sx={{ color: '#db4454' }} />
          </IconButton>
          <IconButton sx={{ width: '40px', margin: '5px auto' }}>
            <Facebook sx={{ color: '#3b5998' }} />
          </IconButton>
          <IconButton sx={{ width: '40px', margin: '5px auto' }}>
            <Twitter sx={{ color: '#5ea9dd' }} />
          </IconButton>
        </Stack>
      </Grid>
      <Grid item xs={8} marginTop={3}>
        <Typography variant="body1" marginBottom={2} >{small_text}</Typography>
        <Image src={cover} layout='intrinsic' alt={title} width={1030} height={500} />
        <Box className='editorWrapper' dangerouslySetInnerHTML={{ __html: editor }} />
        {
          link && <Link href={link} target='_blank' underline="none" color='#303335' display='flex' sx={{ alignItems: 'center', transition: '300ms', ':hover': { color: '#ed2945' } }}>
            <LinkIcon sx={{ marginRight: 1, transform: 'rotate(25deg)' }} />
            Джерело
          </Link>
        }
        <Stack flexDirection='row' width='100%' marginTop={2} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack flexDirection='row'>
            <Box display='flex' sx={{ alignItems: 'center', margin: '0 6px' }}>
              <IconButton >
                <Favorite fontSize="small" sx={{ color: color }} />
              </IconButton>
              <Typography variant="body1">5</Typography>
            </Box>
            <Box display='flex' sx={{ alignItems: 'center', margin: '0 6px' }}>
              <Visibility fontSize="small" />
              <Typography variant="body1" marginLeft={0.6}>{views}</Typography>
            </Box>
          </Stack>
          <IconButton aria-label="share" sx={{ marginLeft: 'auto' }}>
            <Share />
          </IconButton>
        </Stack>
        <Stack flexDirection='row' marginTop={2}>
          <Stack flexDirection='row' sx={{ alignItems: 'center' }}>
            <UserAvatar size={70} name={author.name} avatar={author.avatar} />
            <Stack alignItems='center' marginLeft={2}>
              <Link href="#" underline="none" marginBottom={0.7} variant="h6" sx={{ color: '#303335', transition: '300ms', ':hover': { color: '#db4454' } }}>{author.name}</Link>
              <Typography variant="subtitle2" sx={{ background: 'linear-gradient(90deg, #db4454,#9f406d)', color: '#fff', padding: '2px 15px 0', width: 'max-content', fontSize: '12px', borderRadius: '2px' }}>{author.rating}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Comments />
      </Grid>
      <Grid item xs={3}>
        <MyStepper steps={steps} />
        <Paper elevation={2} sx={{ marginLeft: 2, padding: '5px 20px' }}>
          <Typography variant='h6'>Популярні</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
}