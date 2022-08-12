import React from 'react'
import { useQuery } from '@apollo/client'
import { useTypedSelector } from '../../../../../store/hooks'
import { LocationComponent } from '../Components'
import { CircularProgress } from '../../../../'
import { LOCATION } from '../../../../../apollo/queries/locations'

interface IProps {
  widthLeftBox: string
  handleClick: () => void
}

const Location: React.FC<IProps> = ({ widthLeftBox, handleClick }) => {
  const { leftBox } = useTypedSelector(state => state.leftBox)
  const { loading, error, data } = useQuery(LOCATION, {
    variables: { locationID: leftBox },
  })

  if (!data || loading) return <CircularProgress marginTop={6} />

  if (error) return <h5>Error</h5>

  return (
    <LocationComponent
      location={data?.location}
      widthLeftBox={widthLeftBox}
      handleClick={handleClick}
    />
  )
}

export default Location
