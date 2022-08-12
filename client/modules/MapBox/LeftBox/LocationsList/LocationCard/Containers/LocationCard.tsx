import React from 'react'
import { useRouter } from 'next/router'
import { LocationCardComponent } from '../Components'
import { useActions } from '../../../../../../store/hooks'
import type { ILocation } from '../../../../types/location'

interface IProps {
  item: ILocation
  setHighlightedId: (id: string | null) => void
  setSelected: (props: ILocation | null) => void
}

const LocationCard: React.FC<IProps> = ({
  item,
  setHighlightedId,
  setSelected,
}) => {
  const router = useRouter()
  const { setLeftBox } = useActions()

  const handleClick = () => {
    router.push(`?id=${item._id}`)
    setLeftBox(item._id)
    setSelected(item)
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
