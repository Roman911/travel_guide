import React from 'react'
import dynamic from 'next/dynamic'
import { useActions, useTypedSelector } from '../../../../store/hooks'
import { LeftBoxLayout } from '../Components'

interface ICreateLocationProps {
  handleClick: () => void
}

const LocationsList = dynamic(
  () => import('../LocationsList/Containers/LocationList') as any
)
const CreateLocation = dynamic<ICreateLocationProps>(
  () => import('../CreateLocation/Containers/CreateLocation') as any
)

const LeftBox: React.FC = () => {
  const { leftBox } = useTypedSelector(state => state.leftBox)
  const { setLeftBox } = useActions()

  const handleClick = () => {
    setLeftBox('locationsList')
  }

  if (leftBox === 'createLocation') {
    return (
      <LeftBoxLayout>
        <CreateLocation handleClick={handleClick} />
      </LeftBoxLayout>
    )
  }

  if (leftBox === 'createDirection') {
    return (
      <LeftBoxLayout>
        <LocationsList />
      </LeftBoxLayout>
    )
  }

  return (
    <LeftBoxLayout>
      <LocationsList />
    </LeftBoxLayout>
  )
}

export default LeftBox