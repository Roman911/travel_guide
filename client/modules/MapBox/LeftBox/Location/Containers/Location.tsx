import React from 'react'
import { useQuery } from '@apollo/client'
import { useTypedSelector } from '../../../../../hooks'
import { CircularProgress } from '../../../../'
import { LocationComponent } from '../Components'
import { LOCATION } from '../../../../../apollo/queries/locations'

interface IProps {
  widthLeftBox: string
  handleClick: () => void
}

const Location: React.FC<IProps> = ({ widthLeftBox, handleClick }) => {
  const { leftBoxView } = useTypedSelector(state => state.mapBox)
  const { loading, error, data } = useQuery(LOCATION, {
    variables: { locationID: leftBoxView },
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
