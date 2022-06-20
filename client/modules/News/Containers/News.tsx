import React from "react"
import { useRouter } from 'next/router'
import { useQuery } from "@apollo/react-hooks"
import { useActions, useTypedSelector } from '../../../store/hooks'
import { NewsComponent } from '../Components'
import { POSTS } from '../../../apollo/queries/posts'

export const News: React.FC = () => {
  const router = useRouter()
  const { userData } = useTypedSelector(state => state.user)
  const { linearProgress } = useActions()
  const { loading, error, data } = useQuery(POSTS, { variables: { input: { page: 1, limit: 8 } } })

  const clickToNextPage = () => {
    linearProgress(true)
    router.push({
      pathname: '/news',
      query: { page: 1 }
    })
  }

  return <NewsComponent
    title='Новини'
    link='/news'
    linkTitle='Більше новин'
    loading={loading}
    error={error}
    data={data}
    userData={userData}
    clickToNextPage={clickToNextPage}
  />
}