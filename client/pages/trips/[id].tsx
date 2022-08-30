import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { MainLayout, Post } from '../../modules'
import { POST } from '../../apollo/queries/posts'

const Trips: NextPage = () => {
  const router = useRouter()
  //const [post, { loading, error, data }] = useLazyQuery(POST)
  console.log(router)

  React.useEffect(() => {
    //if (router.query.id) {
    //post({
    //variables: { postID: router.query.id },
    //})
    //}
  }, [router])

  return (
    <MainLayout>
      <div>Trips</div>
    </MainLayout>
  )
}

export default Trips
