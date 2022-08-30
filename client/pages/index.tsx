import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { useQuery } from '@apollo/client'
import { Posts } from '../modules'
import { MainLayout } from '../modules'
import { POSTS } from '../apollo/queries/posts'
import { DIRECTIONS } from '../apollo/queries/directions'

const Home: NextPage = () => {
  const {
    loading: loadingByPosts,
    data: dataByPosts,
    error: errorByPosts,
  } = useQuery(POSTS, {
    variables: { input: { limit: 8, page: 1 } },
  })

  const {
    loading: loadingByDirections,
    data: dataByDirections,
    error: errorByDirections,
  } = useQuery(DIRECTIONS, { variables: { input: { limit: 8, page: 1 } } })

  console.log('render: pages, Home', dataByDirections)

  return (
    <MainLayout img="/velosipedyi_banner.webp">
      <Box marginTop={4}>
        <Posts
          home={true}
          layout={{
            title: 'Новини',
            link: '/news',
            linkTitle: 'Більше новин',
          }}
          loading={loadingByPosts}
          numberPosts={8}
          posts={dataByPosts?.posts}
        />
        <Posts
          home={true}
          layout={{
            title: 'Маршрути',
            link: '/directions',
            linkTitle: 'Більше маршрутів',
          }}
          loading={loadingByDirections}
          numberPosts={8}
          posts={dataByDirections?.directions}
        />
      </Box>
    </MainLayout>
  )
}

export default Home
