import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { MapsContainer } from '../modules'
import { MainLayout } from '../Components'

const Maps: NextPage = () => {
  return <MainLayout>
    <Box marginTop='64px'>
      <MapsContainer />
    </Box>
  </MainLayout>
}

export default Maps