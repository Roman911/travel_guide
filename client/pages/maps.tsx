import type { NextPage } from 'next'
import { useLoadScript } from '@react-google-maps/api'
import { GoogleMaps } from '../modules'
import { MainLayout } from '../Components'

const Maps: NextPage = () => {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_KAY || ''
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries: ['places']
  })

  if (!isLoaded) return <p>Loading...</p>

  return <MainLayout >
    <GoogleMaps />
  </MainLayout>
}

export default Maps