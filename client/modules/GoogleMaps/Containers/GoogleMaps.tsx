import dynamic from "next/dynamic"
import { useDispatch, useSelector } from 'react-redux'
import React, { useCallback, useRef, useState } from "react"
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { Spin } from "../../../Components"
import { LocationInformation } from "../../"
import { GoogleMapsProps } from '../../../types/googleMaps'
import { MarkersController } from '../Components/MarkersController'
import { googleMapsActions } from '../../../redux/actions'

type SearchProps = {
  panTo: any
}

const Search = dynamic<SearchProps>(() => import('../../Search/Containers/Search') as any, {
  loading: () => <Spin />
})

type MyGoogleMapsProps = {
  disableDefaultUI: boolean
  click?: (event) => any
  search: boolean
}

const libraries = ["places"]

export const GoogleMaps: React.FC<MyGoogleMapsProps> = ({ disableDefaultUI, click, search }) => {
  const dispatch = useDispatch()
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY,
    // @ts-ignore
    libraries
  })
  const { mapContainerStyle, center, zoom, locations, control } = useSelector((state: { googleMaps: GoogleMapsProps }) => state.googleMaps)

  const mapRef = useRef()
  const onMapLoad = useCallback((map) => {
    mapRef.current = map
  }, [])
  const panTo = useCallback(({ lat, lng }) => {
    // @ts-ignore
    mapRef.current.panTo({ lat, lng })
    // @ts-ignore
    mapRef.current.setZoom(12)
  }, [])

  const [ selectedPark, setSelectedPark ] = useState<null | string>(null)
  const [ closeWindow, setCloseWindow ] = useState<boolean>(false)
  const handleClick = useCallback(() => {
    setCloseWindow(true)
    setTimeout(() => {
      setSelectedPark(null)
      setCloseWindow(false)
    }, 700)
  }, [])

  const options = {
    disableDefaultUI: disableDefaultUI
  }

  const renderMap = () => {
    return <div style={{ position: 'relative', width: '100%' }}>
      { search && <Search panTo={ panTo } /> }
      <GoogleMap
        mapContainerStyle={ mapContainerStyle }
        zoom={ zoom }
        center={ center }
        options={ options }
        onLoad={ onMapLoad }
        onClick={ click ? (event) => {
          click(event)
          const locations = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          }
          const options = {
            locations,
            control: 'MarkerQuery'
          }
          dispatch(googleMapsActions.createLocation(options))
        } : null}
      >
        { selectedPark && <LocationInformation _id={ selectedPark } handleClick={ handleClick } closeWindow={ closeWindow } /> }
        <MarkersController control={ control } options={ locations } setSelectedPark={ setSelectedPark } />
      </GoogleMap>
    </div>
  }
  if (loadError) {
    return <div>Неможливо завантажити карту</div>
  }
  return isLoaded ? renderMap() : <Spin />
}