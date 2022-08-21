import type { NextPage } from 'next'
import { MainLayout, MapBox } from '../modules'

const Maps: NextPage = () => {
  console.log('render: pages, Maps')

  return (
    <MainLayout>
      <MapBox />
    </MainLayout>
  )
}

export default Maps
