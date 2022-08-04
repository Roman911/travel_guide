import type { NextPage } from 'next'
import { MapBox } from '../modules'
import { MainLayout } from '../Components'

const Maps: NextPage = () => {
  console.log('render: pages, Maps')

  return (
    <MainLayout>
      <MapBox />
    </MainLayout>
  )
}

export default Maps
