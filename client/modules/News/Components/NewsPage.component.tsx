import { IPost } from '../../../typesScript/post'
import { IUserData } from '../../../typesScript/user'
import React from "react"
import { Box, Container, Grid, Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import { PreviewCard } from '../../'
import { PreviewCardSKeleton } from '../../PreviewCard/Components'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IProps {
  loading: boolean | undefined
  error: any
  userData: IUserData | null
  data?: {
    postsAndParams: {
      page: number
      total_pages: number
      total_posts: number
      posts: IPost[]
    }
  }
}

export const NewsPageComponent: React.FC<IProps> = ({ loading, error, data }) => {
  const post = data?.postsAndParams.posts.map(i => {
    return <PreviewCard key={i._id} item={i} usedId={'usedId'} md={3} />
  })

  const postsSkeleton = [...Array(9)].map((i, index) => {
    return <PreviewCardSKeleton key={index} md={3} />
  })

  //const page = parseInt(query.get('page') || '1', 10)

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
          {data?.postsAndParams.posts ? post : postsSkeleton}
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography variant='h6'>
          Області
        </Typography>
        <Typography variant='subtitle2'>
          Львівська
        </Typography>
        <Typography variant='subtitle2'>
          Рівненська
        </Typography>
        <Typography variant='subtitle2'>
          Сумська
        </Typography>
        <Typography variant='subtitle2'>
          Чернігівська
        </Typography>
        <Typography variant='subtitle2'>
          Черкаська
        </Typography>
        <Typography variant='subtitle2'>
          Закарпатьська
        </Typography>
      </Grid>
    </Grid>
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  </Container>
}