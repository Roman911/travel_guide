import React from "react"
import { useLoadScript } from '@react-google-maps/api'
import { MapsComponents } from '../Components'

export const MapsContainer: React.FC = () => {
  const googleMapsApiKey = process.env.GOOGLE_MAPS_KAY || ''
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries: ['places']
  })

  if (!isLoaded) return <div>Loading...</div>

  return <MapsComponents />
}