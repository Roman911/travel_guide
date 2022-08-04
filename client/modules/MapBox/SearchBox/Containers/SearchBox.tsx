import React from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import { useGoogleMapsScript, Libraries } from 'use-google-maps-script'
import { SearchBoxComponent } from '../Components'

interface IProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void
  defaultValue: string
}

const libraries: Libraries = ['places']

const ReadySearchBox: React.FC<IProps> = ({
  defaultValue,
  onSelectAddress,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue })

  const handleSelect = async (address: string) => {
    setValue(address, false)
    clearSuggestions()
    try {
      const results = await getGeocode({ address })
      const { lat, lng } = getLatLng(results[0])
      onSelectAddress(address, lat, lng)
    } catch (error) {
      console.error(`😱 Error:`, error)
    }
  }

  return (
    <SearchBoxComponent
      value={value}
      setValue={setValue}
      status={status}
      data={data}
      handleSelect={handleSelect}
    />
  )
}

const SearchBox: React.FC<IProps> = ({ onSelectAddress, defaultValue }) => {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KAY ?? '',
    libraries,
  })

  if (!isLoaded) return null
  if (loadError) return <div>Error loading</div>

  return (
    <ReadySearchBox
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
    />
  )
}

export default SearchBox
