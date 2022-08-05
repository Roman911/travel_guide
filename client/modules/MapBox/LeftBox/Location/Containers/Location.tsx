import React from 'react'
import { useQuery } from '@apollo/client'
import { useTypedSelector } from '../../../../../store/hooks'
import { LocationComponent } from '../Components'
import { CircularProgress } from '../../../../'
import { LOCATION } from '../../../../../apollo/queries/locations'

const Location: React.FC = () => {
  const { leftBox } = useTypedSelector(state => state.leftBox)
  const { loading, error, data } = useQuery(LOCATION, {
    variables: { locationID: leftBox },
  })

  if (!data || loading) return <CircularProgress marginTop={6} />

  if (error) return <h5>Error</h5>

  return <LocationComponent data={data?.location} />
}

export default Location
