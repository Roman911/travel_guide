import type { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../hooks'
import { MainLayout, MapWrapperComponent } from '../modules'

const Maps: NextPage = () => {
  const router = useRouter()
  const { setLeftBox } = useActions()
  console.log('render: pages, Maps')

  const rout = (rout: string[] | string) => {
    return Array.isArray(rout) ? rout[0] : rout
  }

  React.useEffect(() => {
    if (router.query.locationID) {
      setLeftBox('location')
    } else if (router.query?.tripID) {
      setLeftBox('trip')
    }
  }, [router])

  return (
    <MainLayout>
      <MapWrapperComponent />
    </MainLayout>
  )
}

export default Maps
