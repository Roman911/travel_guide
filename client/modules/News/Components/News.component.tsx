import type { IUserData, IPost } from '../../../typesScript'
import React from "react"
import NextLink from 'next/link'
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'
import { PreviewCard } from '../../'
import { PreviewCardSKeleton } from '../../PreviewCard/Components'

type Props = {
  title: string
  link: string
  linkTitle: string
  loading: boolean | undefined
  error: any
  userData: IUserData | null
  clickToNextPage: () => void
  data?: {
    posts: IPost[]
  }
}

export const NewsComponent: React.FC<Props> = ({ title, link, linkTitle, loading, error, data, userData, clickToNextPage }) => {
  const usedId = userData?._id
  const postsVievs = ['1', '2', '3', '4', '5', '6', '7', '8']

  const posts = data?.posts?.map(i => {
    return <PreviewCard key={i._id} item={i} usedId={usedId} />
  })

  const postsSkeleton = postsVievs.map(i => {
    return <PreviewCardSKeleton key={i} />
  })

  return <Container maxWidth='xl'>
    <Typography variant='h2' marginTop={8}>{title}</Typography>
    <Box>
      <Grid container alignItems='center' marginTop='-35px' sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' }, padding: { xs: '0', sm: '0', md: '0 10px' } }}>
        {loading ? postsSkeleton : posts}
      </Grid>
      <NextLink href={link}>
        <Link onClick={clickToNextPage} variant="button" underline="none" sx={{ cursor: 'pointer' }}>
          <Stack flexDirection='row' alignItems='center' justifyContent='flex-end' marginRight={3}>
            <Typography variant='subtitle1'>{linkTitle}</Typography>
            <ArrowRightAlt />
          </Stack>
        </Link>
      </NextLink>
    </Box>
  </Container>
}