import React from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import { SearchBoxComponent } from '../Components'

type Props = {
  setSettlement: (position: google.maps.LatLngLiteral) => void
}

const SearchBox: React.FC<Props> = ({ setSettlement }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete()

  const handleSelect = async (val: string) => {
    setValue(val, false)
    clearSuggestions()

    const result = await getGeocode({ address: val })
    const { lat, lng } = getLatLng(result[0])
    setSettlement({ lat, lng })
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

export default SearchBox
