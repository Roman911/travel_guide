import React from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script'
import { useActions } from '../../../../hooks'
import { SearchBoxComponent } from '../Components'

interface ISearchProps {
  helperText?: string
  width: string
}

interface IProps extends ISearchProps {
  defaultValue: string
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void
}

const libraries: Libraries = ['places']

const ReadySearchBox: React.FC<IProps> = ({
  helperText,
  defaultValue,
  onSelectAddress,
  width,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue })
  const { setAddress, setLatLng } = useActions()

  const handleSelect = async (address: string) => {
    setAddress(address)
    setValue(address, false)
    clearSuggestions()
    try {
      console.log(address)
      const results = await getGeocode({
        address,
      })
      const { lat, lng } = getLatLng(results[0])
      setLatLng({ latitude: lat, longitude: lng })
      onSelectAddress(address, lat, lng)
    } catch (error) {
      console.error(`😱 Error:`, error)
    }
  }

  return (
    <SearchBoxComponent
      helperText={helperText}
      value={value}
      setValue={setValue}
      status={status}
      data={data}
      handleSelect={handleSelect}
      width={width}
    />
  )
}

const SearchBox: React.FC<ISearchProps> = ({ helperText, width }) => {
  const defaultValue = ''
  const { setViewport } = useActions()
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY ?? '',
    libraries,
  })

  if (!isLoaded) return null
  if (loadError) return <div>Error loading</div>

  return (
    <ReadySearchBox
      helperText={helperText}
      onSelectAddress={(
        _address: string,
        latitude: null | number,
        longitude: null | number
      ) => {
        if (latitude && longitude) {
          setViewport({
            latitude,
            longitude,
            zoom: 12,
          })
        }
      }}
      defaultValue={defaultValue}
      width={width}
    />
  )
}

export default SearchBox
