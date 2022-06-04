import React from "react"
import NextLink from 'next/link'
import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'
import { Article, ArticleSKeleton } from '../../../Components'

type Props = {
  title: string
  link: string
  linkTitle: string
  loading: boolean | undefined
  error: any
  data: undefined | {
    posts: {
      _id: string
      title: string
      cover: string
      small_text: string
    }[]
  }
}

export const NewsComponent: React.FC<Props> = ({ title, link, linkTitle, loading, error, data }) => {
  const postsVievs = ['1', '2', '3', '4', '5', '6', '7', '8']

  const a = true

  const posts = data?.posts?.map(i => {
    return <Article key={i._id} item={i} />
  })

  const postsSkeleton = postsVievs.map(i => {
    return <ArticleSKeleton key={i} />
  })

  return <Box>
    <Typography variant='h2' >{title}</Typography>
    <Box>
      <Grid container alignItems='center' marginTop='-35px' sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' }, padding: { xs: '0', sm: '0', md: '0 10px' } }}>
        {loading ? postsSkeleton : posts}
      </Grid>
      <NextLink href={link}>
        <Link variant="button" underline="none" sx={{ cursor: 'pointer' }}>
          <Stack flexDirection='row' alignItems='center' justifyContent='flex-end' marginRight={3}>
            <Typography variant='subtitle1'>{linkTitle}</Typography>
            <ArrowRightAlt />
          </Stack>
        </Link>
      </NextLink>
    </Box>
  </Box>
}