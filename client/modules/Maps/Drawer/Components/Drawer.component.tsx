import React from "react"
import Image from "next/image"
import LinkNext from "next/link"
import { CircularProgress, Box, Drawer, IconButton, Link, Stack, Typography } from '@mui/material'
import { ChevronLeft, FmdGood, GpsFixed, Share } from '@mui/icons-material'
import { Comments, Likes, PreviewComments } from '../../../'
import { Tags, Views } from '../../../../Components'

type Props = {
  isOpen: boolean
  closeDrawerGM: () => void
  loading: boolean
  location?: {
    _id: string
    title: string
    small_text: string
    address: string[]
    coordinates: string[]
    cover: {
      url: string
    }
  }
}

export const DrawerComponent: React.FC<Props> = ({ isOpen, closeDrawerGM, loading, location }) => {
  return <Drawer
    sx={{
      width: '400px',
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: '400px',
        boxSizing: 'border-box',
        position: 'absolute',
        height: 'calc(100vh - 80px)',
        top: '80px'
      },
    }}
    variant="persistent"
    anchor="left"
    open={isOpen}
  >
    {
      loading ? <CircularProgress /> :
      <>
      <Box marginBottom={2} padding="0 20px" sx={{position: 'relative'}}>
      <Typography variant="h5" textAlign='center' >
        { location?.title }
      </Typography>
      <IconButton onClick={closeDrawerGM} sx={{position: 'absolute', top: 0, right: 0}}>
        <ChevronLeft />
      </IconButton>
    </Box>
    <Box position='relative'>
      {
        location && <Image
          src={location?.cover.url}
          layout="responsive"
          width={399}
          height={260}
        />
      }
      <Stack direction='row' sx={{position: 'absolute', bottom: 0, background: 'rgba(0, 0, 0, 0.5)', width: '100%'}}>
        <Likes postId="156vfd" likes={['vfdvf','vfdvfd']} />
        <Views views={5} color={'red'} />
        <PreviewComments postId='156vfd' />
        <IconButton aria-label="share" sx={{ marginLeft: 'auto', color: 'red' }}>
          <Share />
        </IconButton>
      </Stack>
    </Box>
    <Box padding="0 20px 20px" sx={{borderBottom: '1px solid #c4c4c4'}}>
      <Tags tags={['#hhh','#ggg']} />
      <Typography variant="body1" marginTop={2}>
        { location?.small_text }
      </Typography>
      <Stack direction='row' alignItems='center' marginTop={2}>
        Більше <Link underline="none" marginLeft='5px'><LinkNext href={'/'}>тут</LinkNext></Link>
      </Stack>
    </Box>
    <Box padding="20px 20px">
      <Stack direction='row' alignItems='center'>
        <FmdGood />
        <Typography variant="body2" marginLeft={1}>
          {location?.address.join(', ')}
        </Typography>
      </Stack>
      <Stack direction='row' alignItems='center' marginTop={2}>
        <GpsFixed />
        <Typography variant="body2" marginLeft={1}>
          {location?.coordinates.join(', ')}
        </Typography>
      </Stack>
    </Box>
    <Box marginTop={2} sx={{background: 'rgba(0, 0, 0, 0.1)'}}>
      <Stack direction='row' alignItems='center' padding='8px 20px'>
        <PreviewComments postId='156vfd' />
        <Typography variant="subtitle2" marginLeft={2}>
          Відгуки 6
        </Typography>
      </Stack>
    </Box>
    <Box padding="0 20px">
      <Comments postId="mmvflkdm" />
    </Box>
      </>
    }
  </Drawer>
}