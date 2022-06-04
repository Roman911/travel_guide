import React from "react"
import NextLink from 'next/link'
import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'
import { Article } from '../../../Components'

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

  return <Box>
    <Typography variant='h2' >{title}</Typography>
    <Box>
      <Grid container alignItems='center' marginTop='-35px' sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' }, padding: { xs: '0', sm: '0', md: '0 10px' } }}>
        {
          data?.posts.map(i => {
            return <Article key={i._id} item={i} />
          })
        }
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