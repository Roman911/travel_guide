import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../../hooks'
import { LeftBoxLayout } from '../Components'
import type { ILocation } from '../../types/location'

interface ICreateLocationProps {
  handleClick: () => void
}

interface ILocationProps extends ICreateLocationProps {
  widthLeftBox: string
}

interface ILocationsProps {
  data?: {
    total_locations: number
    locations: ILocation[]
  }
  loading?: boolean
}

interface IProps extends ILocationsProps {
  widthLeftBox: string
}

const LocationsList = dynamic<ILocationsProps>(
  () => import('../LocationsList/Containers/LocationList') as any
)
const Location = dynamic<ILocationProps>(
  () => import('../Location/Containers/Location') as any
)
const CreateLocation = dynamic<ICreateLocationProps>(
  () => import('../CreateLocation/Containers/CreateLocation') as any
)

const LeftBox: React.FC<IProps> = ({ widthLeftBox, data, loading }) => {
  const router = useRouter()
  const { leftBoxView } = useTypedSelector(state => state.mapBox)
  const { setLeftBox, setSelected } = useActions()

  const handleClick = () => {
    setLeftBox('locationsList')
    router.push('')
    setSelected(null)
  }

  if (leftBoxView === 'createLocation') {
    return (
      <LeftBoxLayout widthLeftBox={widthLeftBox}>
        <CreateLocation handleClick={handleClick} />
      </LeftBoxLayout>
    )
  }

  if (leftBoxView === 'createDirection') {
    return (
      <LeftBoxLayout widthLeftBox={widthLeftBox}>
        <LocationsList data={data} loading={loading} />
      </LeftBoxLayout>
    )
  }

  if (leftBoxView === 'locationsList') {
    return (
      <LeftBoxLayout widthLeftBox={widthLeftBox}>
        <LocationsList data={data} loading={loading} />
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
