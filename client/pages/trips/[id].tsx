import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { MainLayout, MapBox } from '../../modules'
import { TRIP } from '../../apollo/queries/trips'

const Trips: NextPage = () => {
  const router = useRouter()
  const [trip, { loading, error, data }] = useLazyQuery(TRIP)

  React.useEffect(() => {
    if (router.query.id) {
      trip({
        variables: { tripID: router.query.id },
      })
    }
  }, [router])

  return (
    <MainLayout>
      <MapBox />
    </MainLayout>
  )
}

export default Trips
