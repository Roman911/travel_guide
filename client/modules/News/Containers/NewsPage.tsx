import React from "react"
import { useLazyQuery } from '@apollo/client'
import { useActions, useTypedSelector } from '../../../store/hooks'
import { NewsPageComponent } from '../Components'
import { POSTS_AND_PARAMS } from '../../../apollo/queries/posts'

export const NewsPage: React.FC = () => {
  const { userData } = useTypedSelector(state => state.user)
  const [posts, { loading, error, data }] = useLazyQuery(POSTS_AND_PARAMS)

  React.useEffect(() => {
    posts({
      variables: {
        input: {
          page: 1,
          limit: 9
        }
      }
    })
  }, [])

  return <NewsPageComponent
    loading={loading}
    error={error}
    data={data}
    userData={userData}
  />
}