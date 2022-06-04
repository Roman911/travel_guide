import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { NewsComponent } from '../Components'
import { POSTS } from '../../../apollo/queries/posts'

export const News: React.FC = () => {
  const { loading, error, data } = useQuery(POSTS, { variables: { input: { page: 1, limit: 8 } } })

  return <NewsComponent title='Новини' link='/news' linkTitle='Більше новин' loading={loading} error={error} data={data} />
}