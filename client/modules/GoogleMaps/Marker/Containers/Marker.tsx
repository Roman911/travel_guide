import React from 'react'
import { useActions, useTypedSelector } from '../../../../hooks'
import { MarkerComponent } from '../Components'
import { ILocation } from '../../../../types/googleMap'

const Marker: React.FC = () => {
  const { latLng, locationsAndTP } = useTypedSelector(state => state.googleMap)
  const { setSelected } = useActions()

  const handleOpenPopur = (location: ILocation | null) => setSelected(location)

  return (
    <MarkerComponent
      latLng={latLng}
      locations={locationsAndTP?.locations}
      handleOpenPopur={handleOpenPopur}
    />
  )
}

export default Marker
