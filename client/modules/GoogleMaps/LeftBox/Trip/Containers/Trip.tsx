import React from 'react'
import { useQuery } from '@apollo/client'
import { CircularProgress } from '../../../../'
import { TripComponent } from '../Components'
import { TRIP } from '../../../../../apollo/queries/trips'

interface IProps {
  rout: string
  widthLeftBox: string
}

const Trip: React.FC<IProps> = ({ rout, widthLeftBox }) => {
  const { loading, error, data } = useQuery(TRIP, {
    variables: { tripID: rout },
  })

  if (!data || loading) return <CircularProgress marginTop={6} />

  return <TripComponent trip={data.trip} widthLeftBox={widthLeftBox} />
}

export default Trip
