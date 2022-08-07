import React from 'react'
import dynamic from 'next/dynamic'
import { useActions, useTypedSelector } from '../../../../store/hooks'
import { LeftBoxLayout } from '../Components'

interface ICreateLocationProps {
  handleClick: () => void
}

interface ILocationProps extends ICreateLocationProps {
  widthLeftBox: string
}

const LocationsList = dynamic(
  () => import('../LocationsList/Containers/LocationList') as any
)
const Location = dynamic<ILocationProps>(
  () => import('../Location/Containers/Location') as any
)
const CreateLocation = dynamic<ICreateLocationProps>(
  () => import('../CreateLocation/Containers/CreateLocation') as any
)

interface IProps {
  widthLeftBox: string
}

const LeftBox: React.FC<IProps> = ({ widthLeftBox }) => {
  const { leftBox } = useTypedSelector(state => state.leftBox)
  const { setLeftBox } = useActions()

  const handleClick = () => {
    setLeftBox('locationsList')
  }

  if (leftBox === 'createLocation') {
    return (
      <LeftBoxLayout widthLeftBox={widthLeftBox}>
        <CreateLocation handleClick={handleClick} />
      </LeftBoxLayout>
    )
  }

  if (leftBox === 'createDirection') {
    return (
      <LeftBoxLayout widthLeftBox={widthLeftBox}>
        <LocationsList />
      </LeftBoxLayout>
    )
  }

  if (leftBox === 'locationsList') {
    return (
      <LeftBoxLayout widthLeftBox={widthLeftBox}>
        <LocationsList />
      </LeftBoxLayout>
    )
  }

  return (
    <LeftBoxLayout widthLeftBox={widthLeftBox}>
      <Location widthLeftBox={widthLeftBox} handleClick={handleClick} />
    </LeftBoxLayout>
  )
}

export default LeftBox
