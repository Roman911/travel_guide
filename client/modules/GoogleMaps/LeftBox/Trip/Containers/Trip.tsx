import React from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { CircularProgress } from '../../../../'
import { TripComponent } from '../Components'
import { TRIP } from '../../../../../apollo/queries/trips'

interface IProps {
  rout: string
  widthLeftBox: string
}

const Trip: React.FC<IProps> = ({ rout, widthLeftBox }) => {
  const router = useRouter()
  const [trip, { loading, error, data }] = useLazyQuery(TRIP)

  React.useEffect(() => {
    if (router.query.tripID) {
      trip({
        variables: { tripID: router.query.tripID },
      })
    }
  }, [router])

  console.log(data)

  if (!data || loading) return <CircularProgress marginTop={6} />

  return <TripComponent trip={data.trip} widthLeftBox={widthLeftBox} />
}

export default Trip
