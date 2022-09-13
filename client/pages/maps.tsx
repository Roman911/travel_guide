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
    if (router.query.id) {
      setLeftBox(rout(router.query.id))
    } else if (router.query.location) {
      setLeftBox(rout(router.query.location))
    } else if (router.query.direction) {
      setLeftBox(rout(router.query.direction))
    }
  }, [router])

  return (
    <MainLayout>
      <MapWrapperComponent />
    </MainLayout>
  )
}

export default Maps
