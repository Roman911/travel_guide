import type { NextPage } from 'next'
import type { IPost } from '../../typesScript'
import { GetServerSideProps } from 'next'
import { initializeApollo } from "../../lib/apolloClient"
import { POSTS } from "../../apollo/queries/posts"
import { NewsPage } from '../../modules'
import { MainLayout } from '../../Components'

interface IProps {
  data: {
    loading: boolean
    data: {
      posts: IPost[]
    }
  }
}

const News: NextPage<IProps> = ({ data: { loading, data } }) => {

  return <MainLayout>
    {data && <NewsPage posts={data.posts} />}
  </MainLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  console.log(params)

  const apolloClient = initializeApollo()

  const data = await apolloClient.query({
    query: POSTS,
    variables: {
      input: {
        limit: 9,
        page: 1
      }
    }
  })

  return {
    props: { data }
  }
}

export default News