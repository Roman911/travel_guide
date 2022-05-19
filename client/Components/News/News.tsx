import React from "react"
import NextLink from 'next/link'
import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'

type Props = {
  children: React.ReactNode
  title: string
  link: string
  linkTitle: string
}

export const News: React.FC<Props> = ({ children, title, link, linkTitle }) => {

  console.log('News')

  return <Box>
    <Typography variant='h2' >{title}</Typography>
    <Box>
      <Grid container alignItems='center' marginTop='-35px' sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' }, padding: { xs: '0', sm: '0', md: '0 10px' } }}>
        {children}
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