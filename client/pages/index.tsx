import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { useQuery } from '@apollo/react-hooks'
import { Posts } from '../modules'
import { MainLayout } from '../Components'
import { POSTS, POST } from '../apollo/queries/posts'

const Home: NextPage = () => {
  const {
    loading: loadingByPost,
    data: dataByPost,
    error: errorByPost,
  } = useQuery(POSTS, {
    variables: { input: { limit: 8, page: 1 } },
  })

  // Query for Directions
  //const { loading, data, error } = useQuery(POST, { variables: { postID: '60f5371f35006bb0c2f7755b' }})

  console.log('render: pages, Home')

  return (
    <MainLayout img="/velosipedyi-banner-1.jpg">
      <Box marginTop="50px">
        <Posts
          home={true}
          layout={{
            title: 'Новини',
            link: '/news',
            linkTitle: 'Більше новин',
          }}
          loading={loadingByPost}
          numberPosts={8}
          posts={dataByPost?.posts}
        />
        <Posts
          home={true}
          layout={{
            title: 'Маршрути',
            link: '/directions',
            linkTitle: 'Більше маршрутів',
          }}
          loading={loadingByPost}
          numberPosts={8}
          posts={dataByPost?.posts}
        />
      </Box>
    </MainLayout>
  )
}

export default Home
