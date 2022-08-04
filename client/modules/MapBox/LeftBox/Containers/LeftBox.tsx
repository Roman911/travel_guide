import React from 'react'
import dynamic from 'next/dynamic'
import { useTypedSelector } from '../../../../store/hooks'
import { LeftBoxLayout } from '../Components'

const LocationsList = dynamic(
  () => import('../LocationsList/Containers/LocationList') as any
)
const CreateLocation = dynamic(
  () => import('../CreateLocation/Containers/CreateLocation') as any
)

const LeftBox: React.FC = () => {
  const { leftBox } = useTypedSelector(state => state.leftBox)

  if (leftBox === 'createLocation') {
    return (
      <LeftBoxLayout>
        <CreateLocation />
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
