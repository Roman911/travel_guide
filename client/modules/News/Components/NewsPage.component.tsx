import { IPost } from '../../../typesScript/post'
import { IUserData } from '../../../typesScript/user'
import React from "react"
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { PreviewCard } from '../../'
import { PreviewCardSKeleton } from '../../PreviewCard/Components'

interface IProps {
  loading: boolean | undefined
  error: any
  userData: IUserData | null
  data?: {
    page: number
    total_pages: number
    total_posts: number
    posts: IPost[]
  }
}

export const NewsPageComponent: React.FC<IProps> = ({ loading, error, data }) => {
  const postsVievs = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const post = data?.posts.map(i => {
    return <PreviewCard key={i._id} item={i} usedId={'usedId'} md={4} />
  })

  const postsSkeleton = postsVievs.map(i => {
    return <PreviewCardSKeleton key={i} md={4} />
  })

  return <Container maxWidth='xl' >
    <Typography marginTop={10} marginLeft={2} variant="h3">Новини</Typography>
    <Grid container >
      <Grid item xs={10} padding='10px 0'>
        <Stack direction='row' justifyContent='flex-end' spacing={2} marginRight={2}>
          <Typography variant="body2">
            Сортувати за популярністю
          </Typography>
          <Typography variant="body2">
            За тиждень | місяць | рік
          </Typography>
        </Stack>
        <Grid container alignItems='center' marginTop={2} sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' }, padding: { xs: '0', sm: '0', md: '0 10px' } }}>
          {data?.posts ? post : postsSkeleton}
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography variant='body2'>
          Категорії
        </Typography>
      </Grid>
    </Grid>
  </Container>
}