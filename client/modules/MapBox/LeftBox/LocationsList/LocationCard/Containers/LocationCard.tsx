import React from 'react'
import { LocationCardComponent } from '../Components'
import { useActions } from '../../../../../../store/hooks'
import type { ILocation } from '../../../../types/location'

interface IProps {
  item: ILocation
}

const LocationCard: React.FC<IProps> = ({ item }) => {
  const { setLeftBox } = useActions()

  const handleClick = () => {
    setLeftBox(item._id)
  }

  return <LocationCardComponent item={item} handleClick={handleClick} />
}

export default LocationCard
