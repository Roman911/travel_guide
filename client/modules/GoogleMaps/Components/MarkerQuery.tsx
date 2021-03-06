import { Marker } from '@react-google-maps/api'
import { useSelector } from 'react-redux'
import { GoogleMapsProps } from "../../../types/googleMaps"

const MarkerQuery = () => {
  const { locations, isType }: any  = useSelector((state: { googleMaps: GoogleMapsProps }) => state.googleMaps)
  const { lat, lng }: any = locations
  const position = {
    lat: Number(lat),
    lng: Number(lng)
  }

  return <Marker
    position={ position }
    icon={ isType && isType !== 'other' ? { url: `/assets/images/${isType}.png` } : null }
  />
}

export default MarkerQuery