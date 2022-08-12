import React from 'react'
import { useRouter } from 'next/router'
import { LocationCardComponent } from '../Components'
import { useActions } from '../../../../../../store/hooks'
import type { ILocation } from '../../../../types/location'

interface IProps {
  item: ILocation
  setHighlightedId: (id: string | null) => void
}

const LocationCard: React.FC<IProps> = ({ item, setHighlightedId }) => {
  const router = useRouter()
  const { setLeftBox } = useActions()

  const handleClick = () => {
    router.push(`?id=${item._id}`)
    setLeftBox(item._id)
  }

  return (
    <LocationCardComponent
      item={item}
      handleClick={handleClick}
      setHighlightedId={setHighlightedId}
    />
  )
}

export default LocationCard
