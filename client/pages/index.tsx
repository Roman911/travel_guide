import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { News } from '../modules'
import { MainLayout, Newss } from '../Components'

const Home: NextPage = () => {

  console.log('render: pages, Home')

  return <MainLayout img='/velosipedyi-banner-1.jpg'>
    <Box marginTop='50px'>
      <News />
      <Newss title='Маршрути' link='/routes' linkTitle='Більше маршрутів'>
        <div>1321321321</div>
      </Newss>
    </Box>
  </MainLayout>
}

export default Home
