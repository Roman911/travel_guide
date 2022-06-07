import React from "react"
import Image from "next/image"
import { Box, Container, Grid, IconButton, Link, Paper, Stack, Skeleton, Typography } from '@mui/material'
import { Facebook, Favorite, Share, Twitter, Visibility } from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link'
import { useDate } from '../../hooks/useDate'
import { Tags, MyStepper, UserAvatar } from '../'

export const PostSkeleton: React.FC = () => {
  return <Container >
    <Stack marginTop={10} flexDirection='row' alignItems='center' justifyContent='space-between'>
      <Box>
        <Skeleton height='40px' width='400px' />
        <Stack flexDirection='row'>
          <Skeleton width='100px' /><Skeleton width='100px' sx={{ marginLeft: 2 }} /><Skeleton width='100px' sx={{ marginLeft: 2 }} />
        </Stack>
      </Box>
    </Stack>
    <Grid container marginTop={2}>
      <Grid item xs={1} marginTop={3}>
        <Stack alignItems='center'>
          <Skeleton width='30px' />
          <Skeleton width='30px' />
          <Skeleton width='30px' />
        </Stack>
      </Grid>
      <Grid item xs={8} sx={{ padding: '0 10px' }}>
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton height='300px' width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton height='300px' width='100%' />
      </Grid>
      <Grid item xs={3} sx={{ padding: '0 10px' }}>
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' sx={{ marginTop: 2 }} />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
        <Skeleton width='100%' />
      </Grid>
    </Grid>
  </Container>
}