import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { News } from '../modules'
import { MainLayout, Newss } from '../Components'

const Home: NextPage = () => {
  return <MainLayout isImg={true}>
    <Box marginTop='50px'>
      <News />
      <Newss title='Маршрути' link='/routes' linkTitle='Більше маршрутів'>
        <div>1321321321</div>
      </Newss>
    </Box>
  </MainLayout>
}

export default Home
