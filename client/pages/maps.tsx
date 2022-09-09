import type { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../hooks'
import { MainLayout, MapBox } from '../modules'

import { GoogleMaps } from '../modules/GoogleMaps'

const Maps: NextPage = () => {
  const router = useRouter()
  const { setLeftBox } = useActions()
  console.log('render: pages, Maps')

  React.useEffect(() => {
    if (router.query.id) {
      const id = Array.isArray(router.query.id)
        ? router.query.id[0]
        : router.query.id
      setLeftBox(id)
    }
  }, [router])

  React.useEffect(() => {
    if (router.query.location) {
      const location = Array.isArray(router.query.location)
        ? router.query.location[0]
        : router.query.location
      setLeftBox(location)
    }
  }, [router])

  return (
    <MainLayout>
      {/*<MapBox />*/}
      <GoogleMaps />
    </MainLayout>
  )
}

export default Maps
