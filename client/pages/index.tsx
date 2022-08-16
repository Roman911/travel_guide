import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { useQuery } from '@apollo/react-hooks'
import { News, Posts } from '../modules'
import { MainLayout, Newss } from '../Components'
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

  console.log('render: pages, Home', dataByPost)

  return (
    <MainLayout img="/velosipedyi-banner-1.jpg">
      <Box marginTop="50px">
        <Posts
          home={true}
          layout={{
            title: 'Новини',
            link: '/news',
            linkTitle: 'Більше маршрутів',
          }}
          posts={dataByPost?.posts}
        />
        <News />
        <Newss title="Маршрути" link="/routes" linkTitle="Більше маршрутів">
          <div>1321321321</div>
        </Newss>
      </Box>
    </MainLayout>
  )
}

export default Home
